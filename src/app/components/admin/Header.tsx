// components/Header.js
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Header() {
    const router = useRouter();
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/admin/login');
  };
    return (
      <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow" style={{ background: "white" }}>
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
          <button className="btn btn-success" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  }
  