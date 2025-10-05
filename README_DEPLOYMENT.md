# Wexford Educare - Quick Deployment Reference

## 📋 What You Have Now

✅ **Static Next.js Frontend** (ready for Hostinger)
✅ **PHP Backend APIs** (contact.php, apply.php)
✅ **MySQL Database Schema** (database.sql)
✅ **Configuration Files** (.htaccess, config.php)
✅ **Complete Documentation** (DEPLOYMENT_GUIDE.md, DASHBOARD_SETUP.md)

---

## 🚀 Quick Deployment Steps

### 1. Export Static Site
```bash
npm run build
```
This creates the `out/` folder with your static site.

### 2. Setup MySQL on Hostinger
- Login to cPanel
- Create MySQL database
- Import `public/api/database.sql`
- Note your database credentials

### 3. Configure PHP Backend
Edit `public/api/config.php`:
```php
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_user');
define('DB_PASS', 'your_database_password');
define('SMTP_PASS', 'your_email_password');
```

### 4. Upload to Hostinger
Upload to `public_html/`:
- All files from `out/` folder
- `api/` folder from `public/`
- `.htaccess` from `public/`

### 5. Test Forms
- Visit https://wexfordeducare.com/contact-us
- Submit a test contact form
- Check email and database

---

## 📁 File Structure on Hostinger

```
public_html/
├── index.html                 # From out/
├── _next/                     # From out/
├── images/                    # From out/
├── api/                       # From public/api/
│   ├── config.php            # ⚙️ Configure this!
│   ├── contact.php
│   ├── apply.php
│   └── database.sql          # Import to MySQL
├── .htaccess                 # From public/
└── (other files from out/)
```

---

## 🔧 Configuration Checklist

- [ ] Update database credentials in `config.php`
- [ ] Update email password in `config.php`
- [ ] Set `DEBUG_MODE` to `false`
- [ ] Update `ALLOWED_ORIGIN` to your domain
- [ ] Import `database.sql` to MySQL
- [ ] Change default admin password
- [ ] Enable HTTPS/SSL
- [ ] Test contact form
- [ ] Test apply form

---

## 📧 Email Setup

Your forms will send emails to: **info@wexfordeducare.com**

Make sure this email exists in cPanel email accounts!

---

## 🎯 Dashboard (Optional)

Create a separate React dashboard:
1. See `DASHBOARD_SETUP.md` for detailed instructions
2. Deploy to `admin.wexfordeducare.com` or Vercel
3. Fetch data from MySQL via PHP APIs

---

## 📚 Documentation Files

1. **DEPLOYMENT_GUIDE.md** - Complete step-by-step deployment guide
2. **DASHBOARD_SETUP.md** - Instructions for creating admin dashboard
3. **README_DEPLOYMENT.md** - This quick reference (you are here)

---

## 🔒 Security Notes

- Change the default admin password in the database
- Keep `config.php` secure (contains database credentials)
- Set `DEBUG_MODE = false` in production
- Enable HTTPS (SSL certificate)
- Consider adding reCAPTCHA to forms

---

## ✅ Testing Checklist

After deployment:
- [ ] Contact form works
- [ ] Apply form works
- [ ] Emails sent to admin
- [ ] Auto-reply sent to users
- [ ] Data saved in database
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Mobile responsive works

---

## 🆘 Troubleshooting

### Forms not working?
1. Check browser console (F12)
2. Check PHP error logs in cPanel
3. Verify database credentials
4. Check CORS settings in config.php

### Emails not sending?
1. Verify email account exists in cPanel
2. Check spam folder
3. Verify SMTP settings
4. Check PHP mail logs

### Database errors?
1. Check credentials in config.php
2. Ensure database user has privileges
3. Verify database name is correct

---

## 📞 Support

**Email:** info@wexfordeducare.com
**Phone:** +44 20 3375 9568
**Address:** 129 Mile End Road, London, E1 4BG, United Kingdom

---

## 🎉 You're All Set!

Everything is ready for deployment. Follow the steps above and your website will be live!

**Good luck! 🚀**
