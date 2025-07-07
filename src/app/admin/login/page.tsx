'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Script from 'next/script';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      //alert('✅ Login successful!');
      router.push('/admin/dashboard');
    } else {
      alert('❌ Invalid credentials');
    }
  };

  return (
    <>
      
        <div className="row justify-content-center">
          <div>
            <div className="row">
              <div className="col-lg-12">
                <div className="p-5" style={{borderRadius:'20px',background:'white',marginTop: '100px !important;', border: 'solid 1px white', width: '511px',margin:'auto' }}>
                  <div className="text-center mb-4">
                    <img src="/frontend/assets/img/logo/logo.png" style={{ width: '150px' }} />
                  </div>
                  <form onSubmit={handleLogin}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        style={{ height: '45px', background: 'none', fontSize: '20px', color: 'white' }}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        style={{ height: '45px', background: 'none', fontSize: '20px' }}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary"
                        style={{ backgroundColor: '#065c14', border: '1px solid #065c14', borderRadius: '4px', width: '100px', height: '45px' }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
