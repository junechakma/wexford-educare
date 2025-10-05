<?php
/**
 * Database Configuration
 * Update these values with your Hostinger MySQL credentials
 */

// Prevent direct access
if (!defined('API_ACCESS')) {
    http_response_code(403);
    die('Direct access not permitted');
}

// Database Configuration
define('DB_HOST', 'localhost'); // Usually 'localhost' on Hostinger
define('DB_NAME', 'your_database_name'); // Your MySQL database name
define('DB_USER', 'your_database_user'); // Your MySQL username
define('DB_PASS', 'your_database_password'); // Your MySQL password
define('DB_CHARSET', 'utf8mb4');

// Email Configuration
define('SMTP_HOST', 'smtp.hostinger.com'); // Hostinger SMTP server
define('SMTP_PORT', 587); // TLS port
define('SMTP_USER', 'info@wexfordeducare.com'); // Your email
define('SMTP_PASS', 'your_email_password'); // Your email password
define('SMTP_FROM', 'info@wexfordeducare.com');
define('SMTP_FROM_NAME', 'Wexford Educare');

// Admin Email (where notifications will be sent)
define('ADMIN_EMAIL', 'info@wexfordeducare.com');

// CORS Configuration (for static site)
define('ALLOWED_ORIGIN', 'https://wexfordeducare.com'); // Your domain

// Error Reporting (set to 0 in production)
define('DEBUG_MODE', false);

// Timezone
date_default_timezone_set('Europe/London');

/**
 * Database Connection Function
 */
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        return $pdo;
    } catch (PDOException $e) {
        if (DEBUG_MODE) {
            error_log("Database Connection Error: " . $e->getMessage());
        }
        return null;
    }
}

/**
 * CORS Headers
 */
function setCORSHeaders() {
    // Allow from configured origin
    header("Access-Control-Allow-Origin: " . ALLOWED_ORIGIN);
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 3600");

    // Handle preflight request
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
}

/**
 * Send JSON Response
 */
function sendJSON($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}

/**
 * Validate Email
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Sanitize Input
 */
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * Send Email using PHP mail() function
 * For better reliability, consider using PHPMailer library
 */
function sendEmail($to, $subject, $body, $replyTo = null) {
    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM . '>';

    if ($replyTo) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }

    $headersString = implode("\r\n", $headers);

    return mail($to, $subject, $body, $headersString);
}
