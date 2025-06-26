'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('admin/login');
  };

  return (
    <>

<div className="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
</div>

<div className="row">
  
    <div className="col-xl-4 col-md-6 mb-4" >
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
               
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">1</div>
            </div>
            <div className="col-auto">
              <button className="btn btn-success btn-circle">
                <i className="fas fa-check"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</div>

<div className="row">
  <div className="col-xl-12 col-md-12 mb-12">
    <div className="card border-left-primary shadow h-100 py-2">
      <div className="card-body">
        <img src="/admin/images/logo.png" alt="Logo" style={{ width: "100%" }} />
      </div>
    </div>
  </div>
</div>
</>
  );
}
