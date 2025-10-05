<?php
/**
 * Contact Form Submission API
 * Handles contact form submissions and stores them in the database
 */

define('API_ACCESS', true);
require_once __DIR__ . '/config.php';

// Set CORS headers
setCORSHeaders();

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJSON(['error' => 'Method not allowed'], 405);
}

try {
    // Get JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Validate required fields
    $requiredFields = ['name', 'email', 'phone', 'message'];
    $errors = [];

    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            $errors[] = ucfirst($field) . ' is required';
        }
    }

    // Validate email format
    if (!empty($data['email']) && !validateEmail($data['email'])) {
        $errors[] = 'Invalid email address';
    }

    // Validate phone format (basic validation)
    if (!empty($data['phone']) && !preg_match('/^[0-9()#&+*\-=. ]+$/', $data['phone'])) {
        $errors[] = 'Invalid phone number';
    }

    if (!empty($errors)) {
        sendJSON(['error' => implode(', ', $errors)], 400);
    }

    // Sanitize inputs
    $name = sanitizeInput($data['name']);
    $email = sanitizeInput($data['email']);
    $phone = sanitizeInput($data['phone']);
    $subject = isset($data['subject']) ? sanitizeInput($data['subject']) : '';
    $message = sanitizeInput($data['message']);

    // Get database connection
    $db = getDBConnection();
    if (!$db) {
        sendJSON(['error' => 'Database connection failed. Please try again later.'], 500);
    }

    // Insert into database
    $sql = "INSERT INTO contact_submissions (name, email, phone, subject, message, created_at)
            VALUES (:name, :email, :phone, :subject, :message, NOW())";

    $stmt = $db->prepare($sql);
    $result = $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':subject' => $subject,
        ':message' => $message
    ]);

    if (!$result) {
        sendJSON(['error' => 'Failed to save contact form. Please try again.'], 500);
    }

    // Get the inserted ID
    $submissionId = $db->lastInsertId();

    // Send email notification to admin
    $emailSubject = 'New Contact Form Submission - Wexford Educare';
    $emailBody = '
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a237e; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a237e; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
                <div class="field">
                    <span class="label">Submission ID:</span> #' . $submissionId . '
                </div>
                <div class="field">
                    <span class="label">Name:</span> ' . htmlspecialchars($name) . '
                </div>
                <div class="field">
                    <span class="label">Email:</span> ' . htmlspecialchars($email) . '
                </div>
                <div class="field">
                    <span class="label">Phone:</span> ' . htmlspecialchars($phone) . '
                </div>
                <div class="field">
                    <span class="label">Subject:</span> ' . htmlspecialchars($subject) . '
                </div>
                <div class="field">
                    <span class="label">Message:</span><br>
                    ' . nl2br(htmlspecialchars($message)) . '
                </div>
                <div class="field">
                    <span class="label">Submitted:</span> ' . date('Y-m-d H:i:s') . '
                </div>
            </div>
            <div class="footer">
                <p>This is an automated notification from Wexford Educare website.</p>
            </div>
        </div>
    </body>
    </html>
    ';

    sendEmail(ADMIN_EMAIL, $emailSubject, $emailBody, $email);

    // Send auto-reply to user
    $autoReplySubject = 'Thank you for contacting Wexford Educare';
    $autoReplyBody = '
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a237e; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; background: #f9f9f9; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Thank You for Contacting Us!</h2>
            </div>
            <div class="content">
                <p>Dear ' . htmlspecialchars($name) . ',</p>
                <p>Thank you for reaching out to Wexford Educare. We have received your message and our team will get back to you shortly.</p>
                <p><strong>Your message:</strong><br>' . nl2br(htmlspecialchars($message)) . '</p>
                <p>We typically respond within 24-48 hours during business days (Monday-Friday, 9:30 AM - 5:30 PM).</p>
                <p>Best regards,<br>Wexford Educare Team</p>
            </div>
            <div class="footer">
                <p><strong>Wexford Educare</strong><br>
                129 Mile End Road, London, E1 4BG, United Kingdom<br>
                Phone: +44 20 3375 9568<br>
                Email: info@wexfordeducare.com</p>
            </div>
        </div>
    </body>
    </html>
    ';

    sendEmail($email, $autoReplySubject, $autoReplyBody);

    // Send success response
    sendJSON([
        'success' => true,
        'message' => 'Thank you for contacting us! We will get back to you shortly.',
        'submissionId' => $submissionId
    ], 200);

} catch (Exception $e) {
    if (DEBUG_MODE) {
        error_log("Contact Form Error: " . $e->getMessage());
    }
    sendJSON(['error' => 'An error occurred. Please try again later.'], 500);
}
