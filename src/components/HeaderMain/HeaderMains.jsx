import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

export const HeaderMains = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="nk-hero pt-4 pt-lg-6 pt-xl-12 pb-xl-4">
      <div className="container">
        <div className="row g-gs align-items-center justify-content-center justify-content-xl-between flex-xl-row-reverse text-center text-xl-start">
          <div className="col-xl-6 col-xxl-5 col-lg-7 col-md-10">
            <div className="nk-hero-gfx me-xxl-n7">
              <div className="p-1 rounded-3 bg-gradient-primary">
                <video
                  className="w-100"
                  width="560"
                  src="../assets/pose.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
            </div>
          </div>
          <ModalVideo
            channel="custom"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="L61p2uyiMSo"
            url="../assets/video2.mp4"
            onClose={() => setOpen(false)}
          />
          <div className="col-xxl-7 col-xl-6 col-lg-11">
            <div className="nk-hero-content">
              <h5 className="text-uppercase fw-normal mb-3">
                Welcome to{" "}
                <span className="text-gradient-primary"> FITAI </span>
              </h5>
              <h1 className="title mb-3 mb-lg-4">
                Be healthy with personal <br />
                <span className="text-gradient-primary"> AI </span>
                trainer.
              </h1>
              <p className="lead text-light">AI Motion Tracking</p>
              <ul
                className="btn-list btn-list-inline py-3 gy-3 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <li>
                  <Link to={"/try-demo"} className="btn_gradient">
                    <span>Try Now</span>
                    <em className="icon ni ni-arrow-long-right"></em>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setOpen(true)}
                    className="btn_gradient"
                    style={{
                      color: "rgba(0,0,0,0.7)",
                      background: "#fff",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <span>View Demo</span> <FontAwesomeIcon icon={faPlay} />
                  </button>
                </li>
              </ul>
              <p className="sub-text mt-2">
                <strong>*100% free </strong> to get started for a weekly. No
                credit card required. Book Demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
