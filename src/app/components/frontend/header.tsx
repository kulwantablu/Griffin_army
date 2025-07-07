'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"><span>Drag</span></div>

   
      <header>
        <div id="header-sticky" className="header-main header-main2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  <div className="header-main-left header-main-left-header2">
                    <div className="header-logo header2-logo">
                      <Link href="/" className="logo-white">
                        <img src="/frontend/assets/img/logo/logo.png" style={{ width: '140px' }} alt="logo-img" />
                      </Link>
                    </div>
                  </div>
                  <div className="header-main-right header-main-right-header2">
                    <div className="main-menu main-menu2 d-none d-xl-block">
                      <nav id="mobile-menu">
                        <ul>
                          <li><Link href="/">Home</Link></li>
                          <li><Link href="/about">About</Link></li>
                          <li className="menu-item-has-children">
                            <a href="#">Our Services</a>
                            <ul className="sub-menu">
                              <li><Link href="/ShootingRanges">Shooting Ranges</Link></li>
                              <li><Link href="/TargetSystem">Target System</Link></li>
                              <li><Link href="/NVD">N.V.D</Link></li>
                              <li><Link href="/LaserRangeFinder">Laser Range Finder</Link></li>
                              <li><Link href="/Quadcopter">Quadcopter & UAV's</Link></li>
                              <li><Link href="/InfraRedLights">Infra Red Lights</Link></li>
                              <li><Link href="/Bulletproofequipments">Bullet Proof Equipments</Link></li>
                              <li><Link href="/Simulators">Simulators</Link></li>
                              <li><Link href="/Prefabricated">Prefabricated Structures</Link></li>
                            </ul>
                          </li>
                          <li><Link href="/gallery">Gallery</Link></li>
                          <li><Link href="/team">Team</Link></li>
                          <li><Link href="/contact">Contact</Link></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="menu-bar">
                      <a className="offset-btn d-none d-xl-inline-block" href="javascript:void(0)">
                        <div className="dot-icon">
                          <img src="/frontend/assets/img/icons/side-toggle.png" alt="toggle-icon" />
                        </div>
                      </a>
                      <a className="side-toggle d-xl-none" href="javascript:void(0)">
                        <div className="dot-icon">
                          <img src="/frontend/assets/img/icons/side-toggle.png" alt="toggle-icon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

 
      <aside className="offset-content-wrapper offset-content-wrapper-army p-relative">
        <button className="offset-content-close">
          <i className="fal fa-times"></i>
        </button>
        <div className="offset-content offset-menu-content offset-content-army">
          <div className="offset-info">
            <div className="offset-logo mb-65">
              <Link href="/">
                <img src="/frontend/assets/img/logo/logo-dark.png" style={{ width: '140px' }} alt="logo-dark" />
              </Link>
            </div>
            <div className="offset-info-widget">
              <h4 className="offset-info-heading">About us</h4>
              <p>
                Griffin Cybernetic weapon often resembles real firearms, but the replicas shoot small plastic 6mm BBs...
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text...
              </p>
            </div>
            <div className="offset-info-widget">
              <h4 className="offset-info-heading">Emergency Contact</h4>
              <div className="footer-widget-contact">
                <ul>
                  <li>
                    <div className="arm-single-contact">
                      <div className="footer-contact-icon">
                        <i className="flaticon-077-map"></i>
                      </div>
                      <p>1122 Potter Rd, Antelope, CA 32802, Canada</p>
                    </div>
                  </li>
                  <li>
                    <div className="arm-single-contact">
                      <div className="footer-contact-icon">
                        <i className="flaticon-073-email-2"></i>
                      </div>
                      <p><a href="mailto:contact.info@mail.com">contact.info@mail.com</a></p>
                    </div>
                  </li>
                  <li>
                    <div className="arm-single-contact">
                      <div className="footer-contact-icon">
                        <i className="flaticon-060-call"></i>
                      </div>
                      <p><a href="tel:912569320003">+91 2569 320 003</a></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-links offset-menu-social">
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="offset-thumb">
            <img src="/frontend/assets/img/bg/offset-bg.jpg" alt="Offset Background" />
          </div>
        </div>
      </aside>

   
      <aside className="fix">
        <div className="side-info side-info-army">
          <div className="side-info-content">
            <div className="offset-widget offset-header mb-40">
              <div className="row align-items-center">
                <div className="col-9">
                  <div className="offset-logo">
                    <Link href="/">
                      <img src="/frontend/assets/img/logo/logo-white.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <button className="side-info-close">
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-menu d-xl-none fix"></div>
            <div className="offset-widget offset-support mb-30">
              <div className="meta-item header-meta-item">
                <a href="tel:+91036259003">
                  <div className="meta-item-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                </a>
                <div className="meta-item-content">
                  <div className="meta-title"><span>Emergency</span> Call</div>
                  <p><a href="tel:+91036259003">+91 036 259 003</a></p>
                </div>
              </div>
            </div>
            <div className="offset-widget offset-social mb-0">
              <div className="social-links">
                <ul>
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>


      <div className="offcanvas-overlay"></div>
      <div className="offcanvas-overlay-white"></div>
    </>
  );
}
