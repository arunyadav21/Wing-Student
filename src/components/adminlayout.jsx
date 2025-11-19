import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-3">
          <Link to="/admin/dashboard" className="block px-3 py-2 rounded hover:bg-blue-600">
            Dashboard
          </Link>
          <Link to="/admin/users" className="block px-3 py-2 rounded hover:bg-blue-600">
            Users
          </Link>
          <Link to="/admin/settings" className="block px-3 py-2 rounded hover:bg-blue-600">
            Settings
          </Link>
          <Link to="/" className="block mt-6 text-yellow-300 hover:text-white">
            ← Back to Website
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
