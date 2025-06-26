'use client'; // Required to use hooks like usePathname

import Header from "./components/frontend/header";
import Footer from "./components/frontend/footer";
import Script from "next/script";
import './globals.css';
import { usePathname } from 'next/navigation';

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return(
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="stylesheet" href="/frontend/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/frontend/assets/css/boxicons.min.css" />
        <link
          rel="stylesheet"
          href="/frontend/assets/css/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="/frontend/assets/css/flaticon.css" />
        <link
          rel="stylesheet"
          href="/frontend/assets/css/magnific-popup.min.css"
        />
        <link rel="stylesheet" href="/frontend/assets/css/style.css" />
        <link rel="stylesheet" href="/frontend/assets/css/header.css" />
        <link rel="stylesheet" href="/frontend/assets/css/responsive.css" />

        <title>Silver Oaks Institute Of Professional Studies</title>
        <link
          rel="icon"
          type="image/png"
          href="assets/img/all-img/favicon.png"
        />
        
      </head>
      <body>
 

        {!isAdmin && <Header />}
        <main>{children}</main>
        {!isAdmin && <Footer />}

        <div className="go-top active">
          <i className="bx bx-up-arrow-alt"></i>
        </div>

        <Script src="/frontend/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/frontend/assets/js/aos.js" strategy="beforeInteractive" />

        <Script
          src="/frontend/assets/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="/frontend/assets/js/magnific-popup.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="/frontend/assets/js/owl.carousel.min.js"
          strategy="beforeInteractive"
        />

        <Script src="/frontend/assets/js/main.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
