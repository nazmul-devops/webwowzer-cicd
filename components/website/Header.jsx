/* eslint-disable no-unused-expressions */

"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import brandLogo from "@/public/assets/images/logo/logo.svg";

import "@/public/assets/css/back-top/back-top.css";
import "@/public/assets/css/bootstrap/bootstrap.min.css";

import "@/public/assets/css/style.css";

export default function Header() {
  const headerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize GSAP with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Define the animation
    const showAnim = gsap
      .from(headerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    // Create the ScrollTrigger
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: self => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
      toggleClass: { targets: headerRef.current, className: "scrolled" },
    });
  }, []);

  const isLinkActive = href => (pathname === href ? "active" : "");

  return (
    <header className="header" ref={headerRef}>
      <div className="container position-relative">
        <nav
          id="header-nav"
          className="header-nav"
          aria-labelledby="header-nav"
        >
          {/* <!-- HAMBURGER-MENU --> */}
          <div className="d-lg-none d-block">
            <button
              type="button"
              className="btn-hamburger"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
            >
              <i className="ri-menu-2-fill" />
            </button>
          </div>

          {/* <!-- MOBILE-MENU --> */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="mobileMenu"
            aria-labelledby="mobileMenu"
          >
            <div className="offcanvas-header">
              {/* <!-- BRAND-LOGO --> */}
              <Link href="/" className="logo">
                <Image
                  src={brandLogo}
                  alt="brand-logo"
                  width={brandLogo.width}
                  height={brandLogo.height}
                />
              </Link>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="ri-close-fill" />
              </button>
            </div>

            <div className="offcanvas-body pt-0">
              <div className="d-flex flex-column gap-4">
                {/* <!-- MOBILE-LIST --> */}
                <ul className="mobilelist">
                  <li className="mobilelist-item">
                    <Link
                      href="/"
                      className={`mobilelist-link ${isLinkActive("/")}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="mobilelist-item">
                    <Link
                      href="/about"
                      className={`mobilelist-link ${isLinkActive("/about")}`}
                    >
                      {" "}
                      About us{" "}
                    </Link>
                  </li>

                  <li className="mobilelist-item">
                    <Link
                      href="/pricing"
                      className={`mobilelist-link ${isLinkActive("/pricing")}`}
                    >
                      {" "}
                      Pricing{" "}
                    </Link>
                  </li>

                  <li className="mobilelist-item">
                    <Link
                      href="/templates"
                      className={`mobilelist-link ${isLinkActive(
                        "/templates"
                      )}`}
                    >
                      Templates
                    </Link>
                  </li>

                  <li className="accordion" id="accordionResources">
                    <span className="accordion-item">
                      <span className="accordion-header">
                        <span
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseResources"
                          aria-expanded="true"
                          aria-controls="collapseResources"
                        >
                          Resources
                        </span>
                      </span>

                      <span
                        id="collapseResources"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionResources"
                      >
                        <span className="accordion-body">
                          <ul className="mobiledropdown">
                            <li className="mobiledropdown-item">
                              <Link
                                href="/tutorials"
                                className="mobiledropdown-link"
                              >
                                <span className="icon">
                                  <img
                                    src="assets/images/menu-icons/tutorials.png"
                                    alt="tutorials-icon"
                                  />
                                </span>

                                <span className="info">
                                  <span className="title">Tutorials</span>
                                  <span className="text">
                                    Become a WebWowZer expert with our guided
                                    product tours and step-by-step tutorials.
                                  </span>
                                </span>
                              </Link>
                            </li>

                            <li className="mobiledropdown-item">
                              <Link
                                href="/blogs"
                                className="mobiledropdown-link"
                              >
                                <span className="icon">
                                  <img
                                    src="assets/images/menu-icons/blog.png"
                                    alt="tutorials-icon"
                                  />
                                </span>

                                <span className="info">
                                  <span className="title">Blog</span>
                                  <span className="text">
                                    Level up your product development with our
                                    expert-curated collection of guides and
                                    articles.
                                  </span>
                                </span>
                              </Link>
                            </li>

                            <li className="mobiledropdown-item">
                              <Link
                                href="/contact"
                                className="mobiledropdown-link"
                              >
                                <span className="icon">
                                  <img
                                    src="assets/images/menu-icons/contact.png"
                                    alt="contact-icon"
                                  />
                                </span>

                                <span className="info">
                                  <span className="title">Contact us</span>
                                  <span className="text">
                                    We&apos;re here for anything you need. Just
                                    drop us a quick message below. We&apos;ll
                                    get back in 24 hrs.
                                  </span>
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </span>
                      </span>
                    </span>
                  </li>

                  <li className="mobilelist-item">
                    <Link
                      href="/faq"
                      className={`mobilelist-link ${isLinkActive("/faq")}`}
                    >
                      {" "}
                      FAQs{" "}
                    </Link>
                  </li>
                </ul>

                <ul className="authlist">
                  <li className="authlist-item">
                    <Link
                      href="/login"
                      className={`login-link ${isLinkActive("/login")}`}
                    >
                      Sign in
                    </Link>
                  </li>

                  <li className="authlist-item">
                    <Link
                      href="/register"
                      className={`register-link ${isLinkActive("/register")}`}
                    >
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- BRAND-LOGO --> */}
          <Link href="/" className="logo">
            <img src="assets/images/logo/logo.svg" alt="BRAND-LOGO" />
          </Link>

          {/* <!-- DESKTOP-MENU --> */}
          <div className="d-none d-lg-block">
            <ul className="desktoplist">
              <li className="desktoplist-item">
                <Link
                  href="/"
                  className={`desktoplist-link ${isLinkActive("/")}`}
                >
                  Home
                </Link>
              </li>

              <li className="desktoplist-item">
                <Link
                  href="/about"
                  className={`desktoplist-link ${isLinkActive("/about")}`}
                >
                  About us
                </Link>
              </li>


              <li className="desktoplist-item">
                <Link
                  href="/pricing"
                  className={`desktoplist-link ${isLinkActive("/pricing")}`}
                >
                  Pricing
                </Link>
              </li>

              <li className="desktoplist-item">
                <Link
                  href="/templates"
                  className={`desktoplist-link ${isLinkActive("/templates")}`}
                >
                  Templates
                </Link>
              </li>

              <li className="desktoplist-item dropdownitem">
                <Link href="#" className="desktoplist-link">
                  Resources
                </Link>

                {/* <!-- RESOURCES-DROPDOWN --> */}
                <span className="resourcesdropdown">
                  <span className="container">
                    <span className="row">
                      <span className="col-12">
                        <ul className="dropdownlist">
                          <li className="dropdownlist-item">
                            <Link
                              href="/tutorials"
                              className="dropdownlist-link"
                            >
                              <span className="icon">
                                <img
                                  src="assets/images/menu-icons/tutorials.png"
                                  alt="tutorials-icon"
                                />
                              </span>

                              <span className="info">
                                <span className="title">Tutorials</span>
                                <span className="text">
                                  Become a WebWowZer expert with our guided
                                  product tours and step-by-step tutorials.
                                </span>
                              </span>
                            </Link>
                          </li>

                          <li className="dropdownlist-item">
                            <Link href="/blogs" className="dropdownlist-link">
                              <span className="icon">
                                <img
                                  src="assets/images/menu-icons/blog.png"
                                  alt="tutorials-icon"
                                />
                              </span>

                              <span className="info">
                                <span className="title">Blog</span>
                                <span className="text">
                                  Level up your product development with our
                                  expert-curated collection of guides and
                                  articles.
                                </span>
                              </span>
                            </Link>
                          </li>

                          <li className="dropdownlist-item">
                            <Link href="/contact" className="dropdownlist-link">
                              <span className="icon">
                                <img
                                  src="assets/images/menu-icons/contact.png"
                                  alt="contact-icon"
                                />
                              </span>

                              <span className="info">
                                <span className="title">Contact us</span>
                                <span className="text">
                                  We&apos;re here for anything you need. Just
                                  drop us a quick message below. We&apos;ll get
                                  back in 24 hrs.
                                </span>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </span>
                    </span>
                  </span>
                </span>
              </li>

              <li className="desktoplist-item">
                <Link
                  href="/faq"
                  className={`desktoplist-link ${isLinkActive("/faq")}`}
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- LANGUAGE-DROPDOWN --> */}
          <div className="language-auth">
            <div className="languagedropdown d-none">
              <figure className="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C10.6 22 9.29167 21.7375 8.075 21.2125C6.85833 20.6875 5.8 19.975 4.9 19.075C4 18.175 3.29167 17.1125 2.775 15.8875C2.25833 14.6625 2 13.35 2 11.95C2 10.55 2.25833 9.24583 2.775 8.0375C3.29167 6.82917 4 5.775 4.9 4.875C5.8 3.975 6.85833 3.27083 8.075 2.7625C9.29167 2.25417 10.6 2 12 2C13.4 2 14.7083 2.25417 15.925 2.7625C17.1417 3.27083 18.2 3.975 19.1 4.875C20 5.775 20.7083 6.82917 21.225 8.0375C21.7417 9.24583 22 10.55 22 11.95C22 13.35 21.7417 14.6625 21.225 15.8875C20.7083 17.1125 20 18.175 19.1 19.075C18.2 19.975 17.1417 20.6875 15.925 21.2125C14.7083 21.7375 13.4 22 12 22ZM15.95 8.25H19.7C19.15 7.1 18.3958 6.14167 17.4375 5.375C16.4792 4.60833 15.375 4.06667 14.125 3.75C14.5417 4.36667 14.8958 5.03333 15.1875 5.75C15.4792 6.46667 15.7333 7.3 15.95 8.25ZM9.6 8.25H14.45C14.2667 7.36667 13.9583 6.5125 13.525 5.6875C13.0917 4.8625 12.5833 4.13333 12 3.5C11.4667 3.95 11.0167 4.54167 10.65 5.275C10.2833 6.00833 9.93333 7 9.6 8.25ZM3.8 14.225H7.775C7.725 13.775 7.69583 13.3708 7.6875 13.0125C7.67917 12.6542 7.675 12.3 7.675 11.95C7.675 11.5333 7.68333 11.1625 7.7 10.8375C7.71667 10.5125 7.75 10.15 7.8 9.75H3.8C3.68333 10.15 3.60417 10.5083 3.5625 10.825C3.52083 11.1417 3.5 11.5167 3.5 11.95C3.5 12.3833 3.52083 12.7708 3.5625 13.1125C3.60417 13.4542 3.68333 13.825 3.8 14.225ZM9.875 20.25C9.45833 19.6167 9.1 18.9333 8.8 18.2C8.5 17.4667 8.25 16.6417 8.05 15.725H4.3C4.93333 16.9083 5.66667 17.8375 6.5 18.5125C7.33333 19.1875 8.45833 19.7667 9.875 20.25ZM4.3 8.25H8.075C8.25833 7.35 8.49167 6.54583 8.775 5.8375C9.05833 5.12917 9.41667 4.44167 9.85 3.775C8.6 4.09167 7.50833 4.625 6.575 5.375C5.64167 6.125 4.88333 7.08333 4.3 8.25ZM12 20.55C12.5833 19.95 13.0708 19.2625 13.4625 18.4875C13.8542 17.7125 14.175 16.7917 14.425 15.725H9.6C9.83333 16.725 10.1458 17.625 10.5375 18.425C10.9292 19.225 11.4167 19.9333 12 20.55ZM9.325 14.225H14.7C14.7667 13.7083 14.8083 13.2875 14.825 12.9625C14.8417 12.6375 14.85 12.3 14.85 11.95C14.85 11.6167 14.8417 11.2958 14.825 10.9875C14.8083 10.6792 14.7667 10.2667 14.7 9.75H9.325C9.25833 10.2667 9.21667 10.6792 9.2 10.9875C9.18333 11.2958 9.175 11.6167 9.175 11.95C9.175 12.3 9.18333 12.6375 9.2 12.9625C9.21667 13.2875 9.25833 13.7083 9.325 14.225ZM14.15 20.225C15.35 19.8417 16.4292 19.2667 17.3875 18.5C18.3458 17.7333 19.1167 16.8083 19.7 15.725H15.975C15.7583 16.625 15.5042 17.4417 15.2125 18.175C14.9208 18.9083 14.5667 19.5917 14.15 20.225ZM16.2 14.225H20.2C20.3167 13.825 20.3958 13.4542 20.4375 13.1125C20.4792 12.7708 20.5 12.3833 20.5 11.95C20.5 11.5167 20.4792 11.1417 20.4375 10.825C20.3958 10.5083 20.3167 10.15 20.2 9.75H16.225C16.275 10.3333 16.3083 10.7792 16.325 11.0875C16.3417 11.3958 16.35 11.6833 16.35 11.95C16.35 12.3167 16.3375 12.6625 16.3125 12.9875C16.2875 13.3125 16.25 13.725 16.2 14.225Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </figure>

              {/* <!-- LANGUAGE-SELECT-DROPDOWN --> */}
              <select className="langselect">
                <option>En</option>
                <option>Bn</option>
                <option>Cn</option>
              </select>
            </div>

            <div className="d-none">
              <div className="divider" />
            </div>

            {/* <!-- AUTHENTICATION-MENU --> */}
            <div className="d-none d-lg-block">
              <ul className="authlist">
                <li className="authlist-item">
                  <Link
                    href="/login"
                    className={`login-link ${isLinkActive("/login")}`}
                  >
                    Sign In
                  </Link>
                </li>

                <li className="authlist-item">
                  <Link
                    href="/register"
                    className={`register-link ${isLinkActive("/register")}`}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
