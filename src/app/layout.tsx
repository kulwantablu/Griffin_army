'use client'; // Required to use hooks like usePathname

import Header from "./components/frontend/header";
import Footer from "./components/frontend/footer";
import Script from "next/script";
import Head from "next/head";
import { usePathname } from 'next/navigation';
import './globals.css';

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


  <link rel="stylesheet" href="/frontend/assets/css/style.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/frontend/assets/img/favicon.png" />

        <link rel="stylesheet" href="/frontend/assets/css/preloader.css" />
        <link rel="stylesheet" href="/frontend/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/frontend/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/frontend/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/frontend/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/frontend/assets/css/backToTop.css" />
        <link rel="stylesheet" href="/frontend/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/frontend/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/frontend/assets/css/fontAwesome5Pro.css" />
        <link rel="stylesheet" href="/frontend/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/frontend/assets/css/slick.css" />
        <link rel="stylesheet" href="/frontend/assets/css/odometer.css" />
        <link rel="stylesheet" href="/frontend/assets/css/default.css" />
        <link rel="stylesheet" href="/frontend/assets/css/style.css" />
      </head>

      <body>
        {!isAdmin && <Header />}
        <main>{children}</main>
        {!isAdmin && <Footer />}

        {/* Preloader */}
       {/*  <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                {"GRIFFIN".split('').map((letter, index) => (
                  <span key={index} data-text-preloader={letter} className="letters-loading">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="loader">
              <div className="row">
                <div className="col-3 loader-section section-left">
                  <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-left">
                  <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        {/* Scroll Progress Circle */}
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        {/* Scripts */}
        <Script src="/frontend/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/frontend/assets/js/vendor/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/meanmenu.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/backToTop.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/nice-select.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/ajax-form.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/jquery.appear.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/jquery.odometer.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/js_circle-progress.min.js" strategy="lazyOnload" />
        <Script src="/frontend/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
