"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import {
  LogOut,
  Download,
  Search,
  Users,
  TrendingUp,
  Calendar,
  Filter,
} from "lucide-react";

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  campus: string;
  status: string;
  course: string;
  bestTime: string;
  message: string;
  submittedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCampus, setFilterCampus] = useState("all");
  const [filterCourse, setFilterCourse] = useState("all");

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin/login");
      return;
    }

    // Fetch applications from API
    fetchApplications();
  }, [router]);

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/applications/list.php");
      const result = await response.json();

      if (result.success) {
        setApplications(result.data);
      } else {
        console.error("Error fetching applications:", result.error);
        setApplications(getMockData());
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      // Use mock data for development
      setApplications(getMockData());
    }
  };

  const getMockData = (): Application[] => {
    return [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        phone: "+44 123 456 7890",
        campus: "London",
        status: "British",
        course: "Business Management",
        bestTime: "Morning 9AM-11AM",
        message: "Interested in part-time options",
        submittedAt: "2025-10-03T10:30:00Z",
      },
      {
        id: "2",
        name: "Sarah Smith",
        email: "sarah@example.com",
        phone: "+44 987 654 3210",
        campus: "Manchester",
        status: "Settlement/ ILR",
        course: "Computing",
        bestTime: "Afternoon 2PM-4PM",
        message: "",
        submittedAt: "2025-10-02T14:20:00Z",
      },
      {
        id: "3",
        name: "Ahmed Khan",
        email: "ahmed@example.com",
        phone: "+44 555 123 4567",
        campus: "Birmingham",
        status: "Refugee",
        course: "Health & Social Care",
        bestTime: "Evening 5PM-7PM",
        message: "Looking for government funding options",
        submittedAt: "2025-10-01T16:45:00Z",
      },
    ];
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Campus",
      "Status",
      "Course",
      "Best Time",
      "Message",
      "Submitted At",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredApplications.map((app) =>
        [
          `"${app.name}"`,
          `"${app.email}"`,
          `"${app.phone}"`,
          `"${app.campus}"`,
          `"${app.status}"`,
          `"${app.course}"`,
          `"${app.bestTime}"`,
          `"${app.message}"`,
          `"${new Date(app.submittedAt).toLocaleString()}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `applications_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToExcel = () => {
    // For Excel export, we'll use CSV format with .xlsx extension
    // In a real app, you'd use a library like xlsx or exceljs
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Campus",
      "Status",
      "Course",
      "Best Time",
      "Message",
      "Submitted At",
    ];

    const csvContent = [
      headers.join("\t"),
      ...filteredApplications.map((app) =>
        [
          app.name,
          app.email,
          app.phone,
          app.campus,
          app.status,
          app.course,
          app.bestTime,
          app.message,
          new Date(app.submittedAt).toLocaleString(),
        ].join("\t")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "application/vnd.ms-excel;charset=utf-8;",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `applications_${new Date().toISOString().split("T")[0]}.xls`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone.includes(searchTerm);

    const matchesCampus =
      filterCampus === "all" || app.campus === filterCampus;

    const matchesCourse =
      filterCourse === "all" || app.course === filterCourse;

    return matchesSearch && matchesCampus && matchesCourse;
  });

  const stats = {
    total: applications.length,
    thisWeek: applications.filter((app) => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(app.submittedAt) > weekAgo;
    }).length,
    today: applications.filter((app) => {
      const today = new Date();
      return (
        new Date(app.submittedAt).toDateString() === today.toDateString()
      );
    }).length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Manage your application leads
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Applications</p>
                <p className="text-3xl font-bold text-secondary">
                  {stats.total}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">This Week</p>
                <p className="text-3xl font-bold text-secondary">
                  {stats.thisWeek}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Today</p>
                <p className="text-3xl font-bold text-secondary">
                  {stats.today}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Export */}
        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>

            {/* Campus Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterCampus}
                onChange={(e) => setFilterCampus(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white appearance-none"
              >
                <option value="all">All Campuses</option>
                <option value="London">London</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Leicester">Leicester</option>
              </select>
            </div>

            {/* Course Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white appearance-none"
              >
                <option value="all">All Courses</option>
                <option value="Business Management">Business Management</option>
                <option value="Computing">Computing</option>
                <option value="Health & Social Care">
                  Health & Social Care
                </option>
                <option value="Accounting and Finance">
                  Accounting and Finance
                </option>
              </select>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-2">
              <button
                onClick={exportToCSV}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                CSV
              </button>
              <button
                onClick={exportToExcel}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Excel
              </button>
            </div>
          </div>
        </Card>

        {/* Applications Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Campus
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Best Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No applications found
                    </td>
                  </tr>
                ) : (
                  filteredApplications.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {app.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{app.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{app.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {app.campus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs truncate">
                          {app.course}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {app.bestTime || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {new Date(app.submittedAt).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600 text-center">
          Showing {filteredApplications.length} of {applications.length}{" "}
          applications
        </div>
      </div>
    </div>
  );
}
