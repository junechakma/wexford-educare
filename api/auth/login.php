<?php
/**
 * Admin Login API Endpoint
 * POST /api/auth/login.php
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
if (empty($data->username) || empty($data->password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Username and password are required']);
    exit();
}

$username = htmlspecialchars(strip_tags($data->username));
$password = $data->password;

try {
    // Get database connection
    $database = new Database();
    $db = $database->getConnection();

    if ($db === null) {
        throw new Exception('Database connection failed');
    }

    // Query to get admin user
    $query = "SELECT id, username, password, email, full_name, status
              FROM admins
              WHERE username = :username AND status = 'active'
              LIMIT 1";

    $stmt = $db->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    if ($stmt->rowCount() === 0) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid username or password']);
        exit();
    }

    $admin = $stmt->fetch();

    // Verify password
    if (!password_verify($password, $admin['password'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid username or password']);
        exit();
    }

    // Update last login
    $updateQuery = "UPDATE admins SET last_login = NOW() WHERE id = :id";
    $updateStmt = $db->prepare($updateQuery);
    $updateStmt->bindParam(':id', $admin['id']);
    $updateStmt->execute();

    // Generate session token (simple token for demo - use JWT in production)
    $token = bin2hex(random_bytes(32));

    // In production, store this token in a sessions table with expiration
    // For now, we'll just return it

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Login successful',
        'admin' => [
            'id' => $admin['id'],
            'username' => $admin['username'],
            'email' => $admin['email'],
            'fullName' => $admin['full_name']
        ],
        'token' => $token
    ]);

} catch (Exception $e) {
    error_log("Login Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'Login failed',
        'message' => $e->getMessage()
    ]);
}
?>
