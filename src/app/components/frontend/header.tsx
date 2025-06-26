'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="top-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-12 col-xm-12">
              <div className="top-left-items">
                <ul>
                  <li><i className="bx bxs-time"></i> Mon - Fri: 9:00 - 18:00</li>
                  <li><i className="bx bxs-envelope"></i> <a href="mailto:contact@sipsbti.com">contact@sipsbti.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-12 col-xm-12">
              <div className="top-right-items">
                <ul>
                  <li><i className="bx bxs-map"></i> <Link href="/contact-us">Visit Us</Link></li>
                  <li><Link href="/students">Students</Link></li>
                  <li><Link href="/faculty">Faculty & Staff</Link></li>
                  <li><Link href="/alumni">Alumni</Link></li>
                  <li><Link href="/visitors">Visitors</Link></li>
                  <li><Link href="/media">Media</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-area" id="navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <Link href="/" className="navbar-brand">
              <img className="logo-dark" src="frontend/assets/img/logo/footer-Logo.jpg" alt="logo" />
            </Link>

            <div className="other-option d-lg-none">
              <div className="option-item">
                <button type="button" className="search-btn" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>

            <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button" aria-controls="navbarOffcanvas">
              <i className="bx bx-menu"></i>
            </a>

            <div className="collapse navbar-collapse justify-content-between">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className="dropdown-toggle nav-link">Home</Link>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link active">About</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link href="/about" className="nav-link active">About Us</Link></li>
                    <li className="nav-item"><Link href="/vision" className="nav-link">Vision & Mission</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">Academics</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link href="/academics" className="nav-link">Academics</Link></li>
                    <li className="nav-item"><Link href="/undergraduate" className="nav-link">Undergraduate</Link></li>
                    <li className="nav-item"><Link href="/graduate" className="nav-link">Graduate</Link></li>
                    <li className="nav-item"><Link href="/online-education" className="nav-link">Online Education</Link></li>
                    <li className="nav-item"><Link href="/faculty" className="nav-link">Faculty</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">Admissions</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link href="/admissions" className="nav-link">Admissions</Link></li>
                    <li className="nav-item"><Link href="/apply" className="nav-link">How to Apply</Link></li>
                    <li className="nav-item"><Link href="/fees" className="nav-link">Tuition & Fees</Link></li>
                    <li className="nav-item"><Link href="/financial-aid" className="nav-link">Financial Aid</Link></li>
                    <li className="nav-item"><Link href="/deadlines" className="nav-link">Date & Deadlines</Link></li>
                    <li className="nav-item"><Link href="/tour" className="nav-link">Schedule a Tour</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">Courses</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link href="/courses" className="nav-link">Courses Sidebar</Link></li>
                    <li className="nav-item"><Link href="/course-details" className="nav-link">Course Details</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">University Life</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link href="/university-life" className="nav-link">University Life</Link></li>
                    <li className="nav-item"><Link href="/campus-experience" className="nav-link">The Campus Experience</Link></li>
                    <li className="nav-item"><Link href="/fitness" className="nav-link">Fitness & Athletics</Link></li>
                    <li className="nav-item"><Link href="/support" className="nav-link">Support & Guidance</Link></li>
                    <li className="nav-item"><Link href="/activities" className="nav-link">Student Activities</Link></li>
                  </ul>
                </li>

               
              </ul>

              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <div className="nav-btn">
                    <Link href="/contact" className="default-btn">Contact Us</Link>
                  </div>
                </div>
                
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
