"use client";

import { usePathname } from "next/navigation";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <html lang="en">
      <head>
        <link
          href="/admin/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link href="/admin/css/sb-admin-2.min.css" rel="stylesheet" />

        <Script src="/admin/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/admin/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/admin/vendor/jquery-easing/jquery.easing.min.js" strategy="beforeInteractive" />
        <Script src="/admin/js/sb-admin-2.min.js" strategy="beforeInteractive" />
        <Script src="/admin/vendor/datatables/jquery.dataTables.min.js" strategy="beforeInteractive" />
        <Script src="/admin/vendor/datatables/dataTables.bootstrap4.min.js" strategy="beforeInteractive" />
        <Script src="/admin/js/demo/datatables-demo.js" strategy="beforeInteractive" />
      </head>
      <body>
        {isLoginPage ? (
          <div
            className="container-fluid"
            style={{
              backgroundImage: 'url("admin/images/bg.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            {children}
          </div>
        ) : (
          <>
            <div id="wrapper" className="d-flex">
              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column w-100">
                <div id="content">
                  <Header />
                  <div className="container-fluid">{children}</div>
                </div>
              </div>
            </div>
       
          </>
        )}

     
      </body>
    </html>
  );
}
