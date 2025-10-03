<?php
/**
 * Password Hash Generator
 * Use this to generate password hashes for admin users
 * Access via browser: /api/utils/generate-password.php?password=admin123
 */

if (!isset($_GET['password'])) {
    echo "Usage: generate-password.php?password=your_password";
    exit();
}

$password = $_GET['password'];
$hash = password_hash($password, PASSWORD_DEFAULT);

echo "<h2>Password Hash Generator</h2>";
echo "<p><strong>Password:</strong> " . htmlspecialchars($password) . "</p>";
echo "<p><strong>Hash:</strong> " . htmlspecialchars($hash) . "</p>";
echo "<hr>";
echo "<p>Use this SQL to create/update admin user:</p>";
echo "<pre>";
echo "INSERT INTO admins (username, password, email, full_name, status) VALUES\n";
echo "('admin', '" . $hash . "', 'admin@wexfordeducare.com', 'Admin User', 'active');\n";
echo "\n-- OR update existing admin:\n";
echo "UPDATE admins SET password = '" . $hash . "' WHERE username = 'admin';";
echo "</pre>";
?>
