import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  return (
    <footer className="nk-footer pt-4 pt-lg-7">
      <div className="section section-top-0">
        <div className="nk-shape bg-shape-wormhole-a mt-xxl-n45p  ms-2 start-50 top-100 translate-middle-x"></div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-9 me-auto">
              <div className="block-text">
                <a href="index.html" className="logo-link mb-4">
                  <div className="logo-wrap">
                    <img
                      className="logo-img logo-light"
                      src="images/logo.png"
                      alt=""
                    />
                    <img
                      className="logo-img_alt"
                      src="../assets/logofit.png"
                      alt="imghere"
                    />
                  </div>
                </a>
                <p className="fs-4 text-white">
                  *100% free to get started for a weekly.
                </p>
                <ul className="btn-list btn-list-inline g-0">
                  <li>
                    {location.pathname !== "/request" && (
                      <Link to="/request" className="btn_gradient">
                        Request a demo
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div className="wgs">
                <h6 className="wgs-title overline-title text-heading mb-3">
                  Our AI tools
                </h6>
                <ul className="list gy-2 list-link-base">
                  <li>
                    <Link to={"/ai-trainer"} className="link-base" href="#">
                      AI Trainer
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-nutrition" className="link-base" href="#">
                      AI Nutrtion
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div className="wgs">
                <h6 className="wgs-title overline-title text-heading mb-3">
                  About
                </h6>
                <ul className="list gy-2 list-link-base">
                  <li>
                    <Link className="link-base" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="link-base" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="link-base" to="/register">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="link-base" to="/terms">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4">
              <div className="wgs">
                <h6 className="wgs-title overline-title text-heading mb-3">
                  Contacts
                </h6>
                <p>
                  If you need help using our service, or have a question about
                  it, please feel free to contact us.
                </p>
                <a href="https://t.me/coder_FS" className="link link-primary">
                  info@fitai.uz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="border-opacity-25 border-white m-0" />
        <div className="py-5">
          <div className="row">
            <div className="col-md">
              <p className="mb-2 mb-md-0">&copy; 2023 FitAI. </p>
            </div>
            <div className="col-md">
              <ul className="btn-list btn-list-inline g-1 justify-content-start justify-content-md-end">
                <li>
                  <a className="link-base" href="#">
                    <em className="icon fs-4 ni ni-facebook-fill"></em>
                  </a>
                </li>
                <li>
                  <a className="link-base" href="#">
                    <em className="icon fs-4 ni ni-twitter-round"></em>
                  </a>
                </li>
                <li>
                  <a className="link-base" href="#">
                    <em className="icon fs-4 ni ni-youtube-round"></em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
