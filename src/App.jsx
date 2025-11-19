import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from "./components/adminlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Event";
import Resources from "./pages/Resorces";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import News from "./pages/News";
import Alumni from "./pages/Alumni";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
import Settings from "./pages/Admin/Setings";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/events/:id" element={<EventDetail />} />

      </Route>

      {/* Admin Panel Pages */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
