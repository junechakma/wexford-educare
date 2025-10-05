<?php
/**
 * Application Form Submission API
 * Handles course application submissions and stores them in the database
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
    $requiredFields = ['name', 'email', 'phone', 'campus', 'status', 'course'];
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
    $campus = sanitizeInput($data['campus']);
    $status = sanitizeInput($data['status']);
    $course = sanitizeInput($data['course']);
    $bestTime = isset($data['bestTime']) ? sanitizeInput($data['bestTime']) : '';
    $message = isset($data['message']) ? sanitizeInput($data['message']) : '';

    // Get database connection
    $db = getDBConnection();
    if (!$db) {
        sendJSON(['error' => 'Database connection failed. Please try again later.'], 500);
    }

    // Insert into database
    $sql = "INSERT INTO application_submissions
            (name, email, phone, campus, status, course, best_time, message, created_at)
            VALUES (:name, :email, :phone, :campus, :status, :course, :best_time, :message, NOW())";

    $stmt = $db->prepare($sql);
    $result = $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':campus' => $campus,
        ':status' => $status,
        ':course' => $course,
        ':best_time' => $bestTime,
        ':message' => $message
    ]);

    if (!$result) {
        sendJSON(['error' => 'Failed to save application. Please try again.'], 500);
    }

    // Get the inserted ID
    $applicationId = $db->lastInsertId();

    // Send email notification to admin
    $emailSubject = 'New Course Application - Wexford Educare';
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
            .highlight { background: #fff3cd; padding: 10px; border-left: 4px solid #ffc107; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>🎓 New Course Application Received</h2>
            </div>
            <div class="content">
                <div class="highlight">
                    <strong>Application ID:</strong> #' . $applicationId . '
                </div>

                <h3>Applicant Information</h3>
                <div class="field">
                    <span class="label">Full Name:</span> ' . htmlspecialchars($name) . '
                </div>
                <div class="field">
                    <span class="label">Email:</span> ' . htmlspecialchars($email) . '
                </div>
                <div class="field">
                    <span class="label">Phone:</span> ' . htmlspecialchars($phone) . '
                </div>

                <h3>Application Details</h3>
                <div class="field">
                    <span class="label">Preferred Campus:</span> ' . htmlspecialchars($campus) . '
                </div>
                <div class="field">
                    <span class="label">Current Status in UK:</span> ' . htmlspecialchars($status) . '
                </div>
                <div class="field">
                    <span class="label">Course Interested:</span> ' . htmlspecialchars($course) . '
                </div>
                <div class="field">
                    <span class="label">Best Time to Call:</span> ' . htmlspecialchars($bestTime) . '
                </div>';

    if (!empty($message)) {
        $emailBody .= '
                <div class="field">
                    <span class="label">Additional Message:</span><br>
                    ' . nl2br(htmlspecialchars($message)) . '
                </div>';
    }

    $emailBody .= '
                <div class="field">
                    <span class="label">Submitted:</span> ' . date('Y-m-d H:i:s') . '
                </div>
            </div>
            <div class="footer">
                <p>Please review this application and contact the applicant as soon as possible.</p>
                <p>This is an automated notification from Wexford Educare website.</p>
            </div>
        </div>
    </body>
    </html>
    ';

    sendEmail(ADMIN_EMAIL, $emailSubject, $emailBody, $email);

    // Send auto-reply to applicant
    $autoReplySubject = 'Application Received - Wexford Educare';
    $autoReplyBody = '
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a237e; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .highlight { background: #d4edda; padding: 15px; border-left: 4px solid #28a745; margin: 20px 0; }
            .details { background: #f9f9f9; padding: 15px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; background: #f9f9f9; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>🎉 Application Received Successfully!</h2>
            </div>
            <div class="content">
                <p>Dear ' . htmlspecialchars($name) . ',</p>

                <div class="highlight">
                    <strong>Thank you for your interest in studying with Wexford Educare!</strong><br>
                    Your application has been successfully submitted and our team will review it shortly.
                </div>

                <div class="details">
                    <h3>Your Application Summary:</h3>
                    <p><strong>Application ID:</strong> #' . $applicationId . '</p>
                    <p><strong>Preferred Campus:</strong> ' . htmlspecialchars($campus) . '</p>
                    <p><strong>Course:</strong> ' . htmlspecialchars($course) . '</p>
                    <p><strong>Submitted:</strong> ' . date('F j, Y \a\t g:i A') . '</p>
                </div>

                <h3>What happens next?</h3>
                <ol>
                    <li>Our admissions team will review your application within 24-48 hours</li>
                    <li>A consultant will contact you at <strong>' . htmlspecialchars($phone) . '</strong></li>
                    <li>We will discuss your eligibility for government funding</li>
                    <li>Guide you through the next steps of the enrollment process</li>
                </ol>

                <p>If you have any urgent questions, please don\'t hesitate to contact us:</p>
                <ul>
                    <li>Email: info@wexfordeducare.com</li>
                    <li>Phone: +44 20 3375 9568</li>
                    <li>Hours: Monday-Friday, 9:30 AM - 5:30 PM</li>
                </ul>

                <p>We look forward to helping you achieve your educational goals!</p>

                <p>Best regards,<br>
                <strong>Wexford Educare Admissions Team</strong></p>
            </div>
            <div class="footer">
                <p><strong>Wexford Educare</strong><br>
                129 Mile End Road, London, E1 4BG, United Kingdom<br>
                Phone: +44 20 3375 9568<br>
                Email: info@wexfordeducare.com<br>
                Company Number: 16289441</p>
            </div>
        </div>
    </body>
    </html>
    ';

    sendEmail($email, $autoReplySubject, $autoReplyBody);

    // Send success response
    sendJSON([
        'success' => true,
        'message' => 'Your application has been submitted successfully! Our team will contact you soon.',
        'applicationId' => $applicationId
    ], 200);

} catch (Exception $e) {
    if (DEBUG_MODE) {
        error_log("Application Form Error: " . $e->getMessage());
    }
    sendJSON(['error' => 'An error occurred. Please try again later.'], 500);
}
