import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from './NavBar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar appears on every page */}
      <NavBar />



      {/* ✅ Page content loads here */}
      <main className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100">
        <Outlet />
      </main>

      {/* ✅ Footer appears on every page */}
      <Footer />
    </div>
  );
}
