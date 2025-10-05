# Admin Dashboard Setup Guide

## Quick Start: Create React Dashboard

This guide helps you create a separate React dashboard to view contact and application submissions.

---

## Option 1: Simple React Dashboard (Recommended)

### Step 1: Create New React App

```bash
# Create new React app with TypeScript
npx create-react-app wexford-admin --template typescript

cd wexford-admin
```

### Step 2: Install Dependencies

```bash
npm install axios react-router-dom @types/react-router-dom
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Create Dashboard Components

**File: `src/App.tsx`**

```typescript
import React, { useState, useEffect } from 'react';
import './App.css';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
  status: string;
}

interface Application {
  id: number;
  name: string;
  email: string;
  phone: string;
  campus: string;
  status: string;
  course: string;
  best_time: string;
  message: string;
  created_at: string;
  application_status: string;
}

function App() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'applications'>('contacts');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);

  const API_BASE = 'https://wexfordeducare.com/api/admin';

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'contacts') {
        const response = await fetch(`${API_BASE}/get-contacts.php`);
        const data = await response.json();
        if (data.success) {
          setContacts(data.data);
        }
      } else {
        const response = await fetch(`${API_BASE}/get-applications.php`);
        const data = await response.json();
        if (data.success) {
          setApplications(data.data);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Wexford Educare - Admin Dashboard</h1>
        <p className="text-blue-200 mt-2">Manage contact and application submissions</p>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'contacts'
                ? 'bg-blue-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Contact Submissions ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'applications'
                ? 'bg-blue-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Applications ({applications.length})
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          ) : activeTab === 'contacts' ? (
            <ContactsTable contacts={contacts} />
          ) : (
            <ApplicationsTable applications={applications} />
          )}
        </div>
      </div>
    </div>
  );
}

// Contacts Table Component
const ContactsTable: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  if (contacts.length === 0) {
    return <p className="text-center text-gray-500 py-8">No contact submissions yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr key={contact.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {contact.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contact.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contact.subject || '-'}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                {contact.message}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(contact.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Applications Table Component
const ApplicationsTable: React.FC<{ applications: Application[] }> = ({ applications }) => {
  if (applications.length === 0) {
    return <p className="text-center text-gray-500 py-8">No applications yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campus</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((app) => (
            <tr key={app.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {app.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                <a href={`mailto:${app.email}`}>{app.email}</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.course}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.campus}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                  {app.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(app.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
```

### Step 4: Deploy Dashboard

#### Option A: Deploy to Hostinger Subdomain

```bash
# Build the app
npm run build

# Upload the 'build' folder contents to:
# /public_html/admin/
```

Then configure subdomain `admin.wexfordeducare.com` in cPanel.

#### Option B: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## Additional PHP API Endpoints Needed

Create these files in `public/api/admin/`:

**File: `public/api/admin/get-contacts.php`**

```php
<?php
define('API_ACCESS', true);
require_once __DIR__ . '/../config.php';

setCORSHeaders();

// TODO: Add authentication here!

try {
    $db = getDBConnection();
    if (!$db) {
        sendJSON(['error' => 'Database connection failed'], 500);
    }

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

// TODO: Add authentication here!

try {
    $db = getDBConnection();
    if (!$db) {
        sendJSON(['error' => 'Database connection failed'], 500);
    }

    $sql = "SELECT * FROM application_submissions ORDER BY created_at DESC";
    $stmt = $db->query($sql);
    $applications = $stmt->fetchAll();

    sendJSON(['success' => true, 'data' => $applications], 200);
} catch (Exception $e) {
    sendJSON(['error' => 'Failed to fetch applications'], 500);
}
```

---

## Security: Add Authentication

Before deploying, add authentication to protect admin endpoints:

**File: `public/api/admin/auth.php`**

```php
<?php
session_start();

function requireAuth() {
    if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
        sendJSON(['error' => 'Unauthorized'], 401);
    }
}

function login($username, $password) {
    $db = getDBConnection();

    $sql = "SELECT * FROM admin_users WHERE username = :username AND is_active = 1";
    $stmt = $db->prepare($sql);
    $stmt->execute([':username' => $username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_id'] = $user['id'];
        $_SESSION['admin_username'] = $user['username'];

        // Update last login
        $updateSql = "UPDATE admin_users SET last_login = NOW() WHERE id = :id";
        $updateStmt = $db->prepare($updateSql);
        $updateStmt->execute([':id' => $user['id']]);

        return true;
    }

    return false;
}
```

Then add `requireAuth();` at the top of `get-contacts.php` and `get-applications.php`.

---

## Summary

1. ✅ Create new React app
2. ✅ Build dashboard UI
3. ✅ Create admin PHP APIs
4. ✅ Add authentication
5. ✅ Deploy to subdomain or Vercel
6. ✅ Test data fetching

Your dashboard will be accessible at:
- `https://admin.wexfordeducare.com` (Hostinger subdomain)
- or `https://your-app.vercel.app` (Vercel)

---

**Need help? Contact: info@wexfordeducare.com**
