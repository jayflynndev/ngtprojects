import Link from "next/link";

export default function Footer() {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link href="/" class="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/about" class="nav-link px-2 text-body-secondary">
              About Us
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/services" class="nav-link px-2 text-body-secondary">
              Services
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/projects" class="nav-link px-2 text-body-secondary">
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/contact" class="nav-link px-2 text-body-secondary">
              Contact Us
            </Link>
          </li>
        </ul>
        <p class="text-center text-body-secondary">
          © 2024 NGT Projects. NGT Projects Ltd is registered in England.
          Company Registration Number: 08450954 Registered Address: Whitby Court
          Abbey Road, Shepley, Huddersfield, England, HD8 8EL
        </p>
      </footer>
    </div>
  );
}
