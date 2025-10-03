<?php
/**
 * Submit Application API Endpoint
 * POST /api/applications/submit.php
 */

require_once '../config/database.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get posted data
$data = json_decode(file_get_contents("php://input"));

// Validate required fields
if (
    empty($data->name) ||
    empty($data->email) ||
    empty($data->phone) ||
    empty($data->campus) ||
    empty($data->status) ||
    empty($data->course)
) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Validate email
if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($data->name));
$email = htmlspecialchars(strip_tags($data->email));
$phone = htmlspecialchars(strip_tags($data->phone));
$campus = htmlspecialchars(strip_tags($data->campus));
$status = htmlspecialchars(strip_tags($data->status));
$course = htmlspecialchars(strip_tags($data->course));
$bestTime = isset($data->bestTime) ? htmlspecialchars(strip_tags($data->bestTime)) : '';
$message = isset($data->message) ? htmlspecialchars(strip_tags($data->message)) : '';

// Get IP address and user agent
$ipAddress = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];

try {
    // Get database connection
    $database = new Database();
    $db = $database->getConnection();

    if ($db === null) {
        throw new Exception('Database connection failed');
    }

    // Prepare insert query
    $query = "INSERT INTO applications
              (name, email, phone, campus, status, course, best_time, message, ip_address, user_agent, lead_status)
              VALUES
              (:name, :email, :phone, :campus, :status, :course, :best_time, :message, :ip_address, :user_agent, 'new')";

    $stmt = $db->prepare($query);

    // Bind parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':campus', $campus);
    $stmt->bindParam(':status', $status);
    $stmt->bindParam(':course', $course);
    $stmt->bindParam(':best_time', $bestTime);
    $stmt->bindParam(':message', $message);
    $stmt->bindParam(':ip_address', $ipAddress);
    $stmt->bindParam(':user_agent', $userAgent);

    // Execute query
    if ($stmt->execute()) {
        $applicationId = $db->lastInsertId();

        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Application submitted successfully',
            'application' => [
                'id' => $applicationId,
                'name' => $name,
                'email' => $email,
                'submittedAt' => date('Y-m-d H:i:s')
            ]
        ]);
    } else {
        throw new Exception('Failed to insert application');
    }

} catch (Exception $e) {
    error_log("Application Submission Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to submit application',
        'message' => $e->getMessage()
    ]);
}
?>
