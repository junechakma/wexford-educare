# Deployment Guide for Hostinger

## Prerequisites
- Hostinger hosting account with MySQL database support
- PHP 7.4 or higher
- MySQL 5.7 or higher

## Step 1: Database Setup

### 1.1 Create MySQL Database in Hostinger
1. Log in to your Hostinger control panel
2. Go to **Databases** → **MySQL Databases**
3. Click **Create New Database**
4. Database name: `wexford_educare` (or your preferred name)
5. Create a database user and password
6. Note down:
   - Database name
   - Database username
   - Database password
   - Database host (usually `localhost`)

### 1.2 Import Database Schema
1. In Hostinger control panel, go to **phpMyAdmin**
2. Select your database
3. Click **Import** tab
4. Choose file: `database/schema.sql`
5. Click **Go** to import

### 1.3 Generate Admin Password Hash
1. Upload the `api` folder to your hosting
2. Visit: `https://yourdomain.com/api/utils/generate-password.php?password=admin123`
3. Copy the generated SQL statement
4. In phpMyAdmin, go to **SQL** tab
5. Paste and execute the SQL to create admin user

## Step 2: Configure Database Connection

### 2.1 Update Database Configuration
Edit `api/config/database.php`:

```php
define('DB_HOST', 'localhost');           // Your MySQL host
define('DB_NAME', 'your_database_name');  // Your database name
define('DB_USER', 'your_username');       // Your database username
define('DB_PASS', 'your_password');       // Your database password
```

### 2.2 Update CORS Settings (if needed)
In `api/config/database.php`, update CORS header:

```php
// Change * to your domain for production
header("Access-Control-Allow-Origin: https://yourdomain.com");
```

## Step 3: Upload Files to Hostinger

### 3.1 File Structure
Upload these folders to your public_html (or appropriate directory):

```
public_html/
├── api/                          # PHP backend files
│   ├── config/
│   │   └── database.php
│   ├── applications/
│   │   ├── submit.php
│   │   └── list.php
│   ├── auth/
│   │   └── login.php
│   └── utils/
│       └── generate-password.php
├── .next/                        # Next.js build output
├── node_modules/                 # Dependencies
├── public/                       # Static files
└── [other Next.js files]
```

### 3.2 Using FTP/File Manager
1. Connect via FTP or use Hostinger File Manager
2. Upload all files to `public_html/`
3. Ensure file permissions are correct (644 for files, 755 for directories)

## Step 4: Next.js Configuration

### 4.1 Update Environment Variables
Create `.env.local` file:

```env
# Production URL
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

### 4.2 Build Next.js Application
On your local machine:

```bash
npm run build
```

Then upload the `.next` folder to your hosting.

## Step 5: Configure .htaccess (if needed)

Create/update `.htaccess` in your public_html:

```apache
# Next.js routing
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1 [L,QSA]

# PHP API routing
RewriteRule ^api/(.*)$ /api/$1 [L]
```

## Step 6: Test the Setup

### 6.1 Test Database Connection
Visit: `https://yourdomain.com/api/applications/list.php`
- Should return JSON with applications (or empty array if no data)

### 6.2 Test Admin Login
1. Visit: `https://yourdomain.com/admin/login`
2. Login with:
   - Username: `admin`
   - Password: `admin123` (or your generated password)

### 6.3 Test Form Submission
1. Visit: `https://yourdomain.com/apply-now`
2. Fill out and submit the form
3. Check admin dashboard to see if application appears

## Step 7: Security Recommendations

### 7.1 Change Default Credentials
```sql
UPDATE admins SET password = 'your_new_hash' WHERE username = 'admin';
```

### 7.2 Secure API Directory
Add to `api/.htaccess`:

```apache
# Prevent directory listing
Options -Indexes

# Only allow specific file access
<FilesMatch "\.(php)$">
    Order Allow,Deny
    Allow from all
</FilesMatch>
```

### 7.3 Enable HTTPS
1. In Hostinger control panel, enable SSL certificate
2. Force HTTPS redirect in `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Step 8: Email Notifications (Optional)

To send email notifications when forms are submitted, add to `api/applications/submit.php`:

```php
// After successful insertion
$to = "admin@yourdomain.com";
$subject = "New Application Received";
$message = "New application from: " . $name;
$headers = "From: noreply@yourdomain.com";

mail($to, $subject, $message, $headers);
```

## Troubleshooting

### Database Connection Issues
- Check database credentials in `api/config/database.php`
- Verify database exists in phpMyAdmin
- Check if database user has proper permissions

### CORS Errors
- Update CORS headers in `api/config/database.php`
- Ensure your domain is whitelisted

### 404 Errors on API Endpoints
- Check `.htaccess` configuration
- Verify file paths are correct
- Check file permissions (should be 644)

### PHP Version Issues
- Verify PHP version in Hostinger panel (should be 7.4+)
- Update PHP version if needed in hosting settings

## Database Backup

Regular backup recommendations:
1. Use Hostinger's automatic backup feature
2. Or use phpMyAdmin export:
   - Go to phpMyAdmin
   - Select database
   - Click **Export**
   - Choose **Quick** method
   - Click **Go**

## Support

For issues:
1. Check error logs in Hostinger control panel
2. Enable PHP error reporting temporarily for debugging
3. Check browser console for frontend errors

---

## Quick Reference

**Admin Panel URL**: `https://yourdomain.com/admin/login`
**Default Credentials**: admin / admin123
**API Endpoints**:
- Submit Application: `POST /api/applications/submit.php`
- List Applications: `GET /api/applications/list.php`
- Admin Login: `POST /api/auth/login.php`

**Database Tables**:
- `admins` - Admin users
- `applications` - Form submissions

---

Last Updated: 2025-10-03
