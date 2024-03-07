import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand d-md-none" href="/">
          NGT Projects
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">
              NGT Projects
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-between">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <svg className="bi" width="24" height="24"></svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
