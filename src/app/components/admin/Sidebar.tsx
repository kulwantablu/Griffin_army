'use client'

import Link from 'next/link';

export default function Sidebar() {
  return (
    <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor: "#09385b", color: "red" }}>
      
      <Link href="/" className="sidebar-brand d-flex align-items-center justify-content-center" style={{background:" white"}}>
        <div className="sidebar-brand-icon">
          <img src="/frontend/assets/img/logo/logo.png" style={{ width: "100px", padding: "10px" }} alt="Logo" />
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link href="/admin/dashboard" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt text-white"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/admin/posts" className="nav-link">
          <i className="fas fa-fw fa-folder text-white"></i>
          <span>Manage Posts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/admin/about" className="nav-link">
          <i className="fas fa-fw fa-folder text-white"></i>
          <span>About</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/admin/vision" className="nav-link">
          <i className="fas fa-fw fa-folder text-white"></i>
          <span>Vision</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/admin/mision" className="nav-link">
          <i className="fas fa-fw fa-folder text-white"></i>
          <span>Mission</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/admin/edit-profile" className="nav-link">
          <i className="fas fa-fw fa-folder text-white"></i>
          <span>Edit Profile</span>
        </Link>
      </li>
      
    </ul>
  );
}
