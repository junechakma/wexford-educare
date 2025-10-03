# Database Documentation

## Overview
This application uses MySQL database to store application submissions and admin user credentials.

## Database Structure

### Tables

#### 1. `admins` Table
Stores admin user credentials for dashboard access.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (PK) | Auto-incrementing primary key |
| username | VARCHAR(50) | Unique username for login |
| password | VARCHAR(255) | Hashed password (bcrypt) |
| email | VARCHAR(100) | Admin email address |
| full_name | VARCHAR(100) | Admin full name |
| created_at | TIMESTAMP | Account creation date |
| last_login | TIMESTAMP | Last login timestamp |
| status | ENUM | Account status (active/inactive) |

**Indexes:**
- `idx_username` on username
- `idx_status` on status

#### 2. `applications` Table
Stores all form submissions from the Apply Now page.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (PK) | Auto-incrementing primary key |
| name | VARCHAR(100) | Applicant's full name |
| email | VARCHAR(100) | Applicant's email |
| phone | VARCHAR(20) | Applicant's phone number |
| campus | VARCHAR(50) | Preferred campus |
| status | VARCHAR(50) | UK residency status |
| course | VARCHAR(100) | Interested course |
| best_time | VARCHAR(100) | Best time to call |
| message | TEXT | Additional message |
| submitted_at | TIMESTAMP | Submission timestamp |
| ip_address | VARCHAR(45) | Submitter's IP address |
| user_agent | TEXT | Browser user agent |
| lead_status | ENUM | Lead status (new/contacted/converted/rejected) |
| notes | TEXT | Admin notes |

**Indexes:**
- `idx_email` on email
- `idx_campus` on campus
- `idx_course` on course
- `idx_lead_status` on lead_status
- `idx_submitted_at` on submitted_at

## API Endpoints

### 1. Submit Application
**Endpoint:** `POST /api/applications/submit.php`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+44 123 456 7890",
  "campus": "London",
  "status": "British",
  "course": "Business Management",
  "bestTime": "Morning 9AM-11AM",
  "message": "I'm interested in part-time options"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "application": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com",
    "submittedAt": "2025-10-03 14:30:00"
  }
}
```

**Response (Error):**
```json
{
  "error": "Missing required fields"
}
```

### 2. List Applications
**Endpoint:** `GET /api/applications/list.php`

**Query Parameters:**
- `campus` - Filter by campus (default: all)
- `course` - Filter by course (default: all)
- `lead_status` - Filter by lead status (default: all)
- `search` - Search in name, email, phone
- `limit` - Number of results (default: 100)
- `offset` - Pagination offset (default: 0)

**Example:**
```
GET /api/applications/list.php?campus=London&limit=50&offset=0
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+44 123 456 7890",
      "campus": "London",
      "status": "British",
      "course": "Business Management",
      "bestTime": "Morning 9AM-11AM",
      "message": "Interested in part-time options",
      "submittedAt": "2025-10-03 14:30:00",
      "leadStatus": "new",
      "notes": null
    }
  ],
  "total": 150,
  "limit": 50,
  "offset": 0
}
```

### 3. Admin Login
**Endpoint:** `POST /api/auth/login.php`

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "admin": {
    "id": 1,
    "username": "admin",
    "email": "admin@wexfordeducare.com",
    "fullName": "Admin User"
  },
  "token": "abc123def456..."
}
```

**Response (Error):**
```json
{
  "error": "Invalid username or password"
}
```

## Security Features

### Password Hashing
- All admin passwords are hashed using PHP's `password_hash()` with bcrypt
- Passwords are verified using `password_verify()`

### SQL Injection Prevention
- All queries use PDO prepared statements
- Parameters are properly bound and sanitized

### XSS Prevention
- All user inputs are sanitized using `htmlspecialchars()` and `strip_tags()`
- Output is properly escaped in API responses

### Data Tracking
- IP addresses and user agents are stored for security auditing
- Timestamps track when applications are submitted

## Sample Queries

### Get all applications from last 7 days
```sql
SELECT * FROM applications
WHERE submitted_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
ORDER BY submitted_at DESC;
```

### Count applications by campus
```sql
SELECT campus, COUNT(*) as total
FROM applications
GROUP BY campus
ORDER BY total DESC;
```

### Get new leads only
```sql
SELECT * FROM applications
WHERE lead_status = 'new'
ORDER BY submitted_at DESC;
```

### Update lead status
```sql
UPDATE applications
SET lead_status = 'contacted',
    notes = 'Called on 2025-10-03'
WHERE id = 123;
```

### Create new admin user
```sql
INSERT INTO admins (username, password, email, full_name, status)
VALUES ('newadmin', '$2y$10$...', 'newadmin@example.com', 'New Admin', 'active');
```

## Maintenance

### Backup Database
```bash
mysqldump -u username -p wexford_educare > backup_$(date +%Y%m%d).sql
```

### Restore Database
```bash
mysql -u username -p wexford_educare < backup_20251003.sql
```

### Check Database Size
```sql
SELECT
    table_name AS 'Table',
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.TABLES
WHERE table_schema = 'wexford_educare'
ORDER BY (data_length + index_length) DESC;
```

## Performance Optimization

### Recommended Indexes
All necessary indexes are created in the schema. If you add custom queries, consider adding indexes for frequently queried columns.

### Regular Maintenance
```sql
-- Optimize tables
OPTIMIZE TABLE applications;
OPTIMIZE TABLE admins;

-- Analyze tables for better query planning
ANALYZE TABLE applications;
ANALYZE TABLE admins;
```

## Troubleshooting

### Connection Failed
- Check database credentials in `api/config/database.php`
- Verify MySQL service is running
- Check user permissions

### Slow Queries
- Check indexes are created
- Run EXPLAIN on slow queries
- Consider adding caching layer

### Data Not Saving
- Check file permissions
- Verify database user has INSERT privileges
- Check error logs in Hostinger panel

---

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)
