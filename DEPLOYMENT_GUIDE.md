# Wexford Educare - Deployment Guide

## Overview

This guide will help you deploy your Wexford Educare website with the following architecture:

- **Frontend (Static)**: Hosted on Hostinger at `wexfordeducare.com`
- **Backend (PHP APIs)**: Hosted on Hostinger with MySQL database
- **Dashboard**: Separate React app on subdomain `admin.wexfordeducare.com` or Vercel

---

## Part 1: Hostinger Setup (Static Frontend + PHP Backend)

### Step 1: Export Next.js as Static Site

1. Ensure your `next.config.ts` has static export enabled:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

2. Build the static site:
```bash
npm run build
```

3. The static files will be in the `out/` directory.

---

### Step 2: Setup MySQL Database on Hostinger

1. **Login to Hostinger cPanel**
2. **Go to MySQL Databases**
3. **Create a new database:**
   - Database name: `wexford_educare` (or your choice)
   - Create database user with a strong password
   - Add user to database with ALL PRIVILEGES

4. **Import the database schema:**
   - Go to phpMyAdmin
   - Select your database
   - Go to "Import" tab
   - Upload the file: `public/api/database.sql`
   - Click "Go" to execute

5. **Note down your credentials:**
   - Database Host: `localhost`
   - Database Name: (what you created)
   - Database User: (what you created)
   - Database Password: (what you set)

---

### Step 3: Configure PHP API Files

1. **Edit `public/api/config.php`** and update these values:

```php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database_name'); // Replace with your database name
define('DB_USER', 'your_database_user'); // Replace with your username
define('DB_PASS', 'your_database_password'); // Replace with your password

// Email Configuration
define('SMTP_USER', 'info@wexfordeducare.com');
define('SMTP_PASS', 'your_email_password'); // Replace with your email password

// CORS Configuration
define('ALLOWED_ORIGIN', 'https://wexfordeducare.com'); // Your domain

// Error Reporting (IMPORTANT: Set to false in production)
define('DEBUG_MODE', false);
```

2. **Change default admin password:**
   - Go to phpMyAdmin
   - Select your database
   - Click on `admin_users` table
   - Click "Edit" on the admin user
   - Generate a new bcrypt password using: https://bcrypt-generator.com/
   - Or use this PHP code:
   ```php
   <?php echo password_hash('your_new_password', PASSWORD_BCRYPT); ?>
   ```

---

### Step 4: Upload Files to Hostinger

1. **Connect via File Manager or FTP**

2. **Upload the following structure:**
   ```
   public_html/
   ├── index.html (from out/ folder)
   ├── _next/ (from out/ folder)
   ├── images/ (from out/ folder)
   ├── api/
   │   ├── config.php
   │   ├── contact.php
   │   └── apply.php
   └── (other static files from out/ folder)
   ```

3. **Important:** Make sure the `api/` folder is in your `public_html/` root directory.

---

### Step 5: Test the Forms

1. Visit `https://wexfordeducare.com/contact-us`
2. Fill out and submit the contact form
3. Check:
   - Form submission works
   - Email is sent to `info@wexfordeducare.com`
   - Data is saved in database (check phpMyAdmin)

4. Visit `https://wexfordeducare.com/apply-now`
5. Fill out and submit the application form
6. Verify the same checks as above

---

## Part 2: Email Configuration

### Option 1: Using Hostinger's Built-in Mail (Recommended)

Hostinger's PHP `mail()` function should work out of the box. Make sure:

1. Your domain email `info@wexfordeducare.com` is set up in cPanel
2. SPF and DKIM records are configured (usually automatic on Hostinger)

### Option 2: Using SMTP (More Reliable)

If you want better email deliverability, install PHPMailer:

1. **Download PHPMailer** from https://github.com/PHPMailer/PHPMailer
2. Upload to `public_html/api/vendor/phpmailer/`
3. Update the `sendEmail()` function in `config.php` to use PHPMailer

---

## Part 3: Separate Dashboard Setup

You have two options for the admin dashboard:

### Option A: Subdomain on Hostinger (admin.wexfordeducare.com)

1. **Create subdomain in cPanel:**
   - Go to "Subdomains"
   - Create: `admin`
   - Document root: `/public_html/admin/`

2. **Create a simple React dashboard:**
   - Create a new React app
   - Build it and upload to `/public_html/admin/`
   - Connect to the same MySQL database via PHP APIs

### Option B: Vercel (Recommended for easier updates)

1. **Create a new React app for dashboard**
2. **Deploy to Vercel**
3. **Create API routes in Vercel to connect to Hostinger MySQL**
4. **Set environment variables in Vercel:**
   ```
   DB_HOST=your-hostinger-db-host
   DB_NAME=wexford_educare
   DB_USER=your_db_user
   DB_PASS=your_db_password
   ```

5. **Enable remote MySQL access on Hostinger:**
   - Go to cPanel → Remote MySQL
   - Add Vercel's IP addresses (or use `%` for any host - less secure)

---

## Part 4: Dashboard Sample Code

### Create a simple PHP API to fetch data:

**File: `public/api/admin/get-contacts.php`**

```php
<?php
define('API_ACCESS', true);
require_once __DIR__ . '/../config.php';

setCORSHeaders();

// Add authentication here!
// Check for valid admin session or API key

try {
    $db = getDBConnection();

    $sql = "SELECT * FROM contact_submissions ORDER BY created_at DESC";
    $stmt = $db->query($sql);
    $contacts = $stmt->fetchAll();

    sendJSON(['success' => true, 'data' => $contacts], 200);
} catch (Exception $e) {
    sendJSON(['error' => 'Failed to fetch contacts'], 500);
}
```

**File: `public/api/admin/get-applications.php`**

```php
<?php
define('API_ACCESS', true);
require_once __DIR__ . '/../config.php';

setCORSHeaders();

// Add authentication here!

try {
    $db = getDBConnection();

    $sql = "SELECT * FROM application_submissions ORDER BY created_at DESC";
    $stmt = $db->query($sql);
    $applications = $stmt->fetchAll();

    sendJSON(['success' => true, 'data' => $applications], 200);
} catch (Exception $e) {
    sendJSON(['error' => 'Failed to fetch applications'], 500);
}
```

---

## Part 5: Security Checklist

- [ ] Change default admin password in database
- [ ] Set `DEBUG_MODE` to `false` in production
- [ ] Update `ALLOWED_ORIGIN` to your actual domain
- [ ] Add rate limiting to prevent spam (consider using Cloudflare)
- [ ] Implement reCAPTCHA on forms (recommended)
- [ ] Add authentication to admin API endpoints
- [ ] Enable HTTPS (SSL certificate from Hostinger)
- [ ] Regular database backups (use cPanel backup feature)
- [ ] Keep `.env` or config files out of version control
- [ ] Validate and sanitize all inputs (already done in PHP files)

---

## Part 6: Testing Checklist

- [ ] Contact form submission works
- [ ] Application form submission works
- [ ] Emails are sent to admin
- [ ] Auto-reply emails are sent to users
- [ ] Data is saved in database correctly
- [ ] Forms reset after successful submission
- [ ] Error messages display correctly
- [ ] All static pages load correctly
- [ ] Images load correctly
- [ ] Mobile responsive design works

---

## Troubleshooting

### Forms not submitting:

1. Check browser console for errors
2. Check PHP error logs in cPanel
3. Verify database credentials in `config.php`
4. Ensure CORS is configured correctly
5. Check file permissions (755 for directories, 644 for files)

### Emails not sending:

1. Check spam folder
2. Verify email account exists in cPanel
3. Check PHP mail logs in cPanel
4. Consider using SMTP instead of PHP mail()
5. Ensure domain DNS records are correct (SPF, DKIM)

### Database connection errors:

1. Verify credentials in `config.php`
2. Check if database user has correct privileges
3. Ensure database exists
4. Check MySQL is running in cPanel

---

## Next Steps

1. **Deploy the static site to Hostinger**
2. **Configure MySQL database**
3. **Update PHP configuration files**
4. **Test forms thoroughly**
5. **Create separate dashboard** (React app on subdomain or Vercel)
6. **Monitor submissions** via phpMyAdmin or dashboard
7. **Set up regular backups**

---

## Support

For questions or issues:
- Email: info@wexfordeducare.com
- Phone: +44 20 3375 9568

---

## File Structure Reference

```
wexford-educare/
├── app/                          # Next.js source code
├── public/
│   └── api/                      # PHP backend (upload to Hostinger)
│       ├── config.php            # Database & email config
│       ├── contact.php           # Contact form API
│       ├── apply.php             # Application form API
│       └── database.sql          # Database schema
├── out/                          # Static export (generated)
├── DEPLOYMENT_GUIDE.md           # This file
└── next.config.ts                # Next.js config
```

---

**Good luck with your deployment! 🚀**
