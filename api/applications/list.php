<?php
/**
 * List Applications API Endpoint
 * GET /api/applications/list.php
 */

require_once '../config/database.php';

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get query parameters
$campus = isset($_GET['campus']) ? $_GET['campus'] : 'all';
$course = isset($_GET['course']) ? $_GET['course'] : 'all';
$leadStatus = isset($_GET['lead_status']) ? $_GET['lead_status'] : 'all';
$search = isset($_GET['search']) ? $_GET['search'] : '';
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 100;
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;

try {
    // Get database connection
    $database = new Database();
    $db = $database->getConnection();

    if ($db === null) {
        throw new Exception('Database connection failed');
    }

    // Build query
    $query = "SELECT
                id,
                name,
                email,
                phone,
                campus,
                status,
                course,
                best_time as bestTime,
                message,
                submitted_at as submittedAt,
                lead_status as leadStatus,
                notes
              FROM applications
              WHERE 1=1";

    $params = [];

    // Add filters
    if ($campus !== 'all') {
        $query .= " AND campus = :campus";
        $params[':campus'] = $campus;
    }

    if ($course !== 'all') {
        $query .= " AND course = :course";
        $params[':course'] = $course;
    }

    if ($leadStatus !== 'all') {
        $query .= " AND lead_status = :lead_status";
        $params[':lead_status'] = $leadStatus;
    }

    if (!empty($search)) {
        $query .= " AND (name LIKE :search OR email LIKE :search OR phone LIKE :search)";
        $params[':search'] = '%' . $search . '%';
    }

    // Order by most recent first
    $query .= " ORDER BY submitted_at DESC";

    // Add pagination
    $query .= " LIMIT :limit OFFSET :offset";

    $stmt = $db->prepare($query);

    // Bind parameters
    foreach ($params as $key => $value) {
        $stmt->bindValue($key, $value);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);

    // Execute query
    $stmt->execute();

    // Get results
    $applications = $stmt->fetchAll();

    // Get total count for pagination
    $countQuery = "SELECT COUNT(*) as total FROM applications WHERE 1=1";
    if ($campus !== 'all') {
        $countQuery .= " AND campus = :campus";
    }
    if ($course !== 'all') {
        $countQuery .= " AND course = :course";
    }
    if ($leadStatus !== 'all') {
        $countQuery .= " AND lead_status = :lead_status";
    }
    if (!empty($search)) {
        $countQuery .= " AND (name LIKE :search OR email LIKE :search OR phone LIKE :search)";
    }

    $countStmt = $db->prepare($countQuery);
    foreach ($params as $key => $value) {
        if ($key !== ':limit' && $key !== ':offset') {
            $countStmt->bindValue($key, $value);
        }
    }
    $countStmt->execute();
    $total = $countStmt->fetch()['total'];

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'data' => $applications,
        'total' => $total,
        'limit' => $limit,
        'offset' => $offset
    ]);

} catch (Exception $e) {
    error_log("List Applications Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to fetch applications',
        'message' => $e->getMessage()
    ]);
}
?>
