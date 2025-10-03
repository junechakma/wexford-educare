-- Wexford Educare Database Schema
-- Create Database
CREATE DATABASE IF NOT EXISTS wexford_educare;
USE wexford_educare;

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    full_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    INDEX idx_username (username),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    campus VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    course VARCHAR(100) NOT NULL,
    best_time VARCHAR(100),
    message TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    lead_status ENUM('new', 'contacted', 'converted', 'rejected') DEFAULT 'new',
    notes TEXT,
    INDEX idx_email (email),
    INDEX idx_campus (campus),
    INDEX idx_course (course),
    INDEX idx_lead_status (lead_status),
    INDEX idx_submitted_at (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert Demo Admin User
-- Password: admin123 (hashed using PHP password_hash)
INSERT INTO admins (username, password, email, full_name, status) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@wexfordeducare.com', 'Admin User', 'active');

-- Note: The password hash above is for 'password'. You should generate a new hash for 'admin123' using:
-- password_hash('admin123', PASSWORD_DEFAULT)

-- Insert demo admin with actual admin123 password
-- You'll need to run this in PHP to generate the correct hash:
-- echo password_hash('admin123', PASSWORD_DEFAULT);
-- Then replace the INSERT statement above with the generated hash

-- Sample Applications Data (optional for testing)
INSERT INTO applications (name, email, phone, campus, status, course, best_time, message, lead_status) VALUES
('John Doe', 'john@example.com', '+44 123 456 7890', 'London', 'British', 'Business Management', 'Morning 9AM-11AM', 'Interested in part-time options', 'new'),
('Sarah Smith', 'sarah@example.com', '+44 987 654 3210', 'Manchester', 'Settlement/ ILR', 'Computing', 'Afternoon 2PM-4PM', '', 'contacted'),
('Ahmed Khan', 'ahmed@example.com', '+44 555 123 4567', 'Birmingham', 'Refugee', 'Health & Social Care', 'Evening 5PM-7PM', 'Looking for government funding options', 'new');
