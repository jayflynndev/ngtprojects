import Image from "next/image";
import logo from "@/assets/ngtlogo.jpg";
export default function HomeHero() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <Image
            src={logo}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Transforming your concept into reality
          </h1>
          <p class="lead">
            NGT is an experienced, established contractor specialising in
            interior refurbishments and fit-outs, some of our services
            include.....
          </p>
          <ul>
            <li>Renovations and fit-outs for commercial buildings</li>
            <li>Shop fitting, end to end</li>
            <li>
              Refurbishment work, including air conditioning and electrical
              installations, flooring and partitions
            </li>
            <li>Dilapidations</li>
            <li>
              Groundwork, including Armco barriers, tarmacking, fencing and
              railings
            </li>
            <li>General building services.</li>
          </ul>
          <p>
            See some of our recent projects below, and find out more about NGT
            Projects!
          </p>
        </div>
      </div>
    </div>
  );
}
