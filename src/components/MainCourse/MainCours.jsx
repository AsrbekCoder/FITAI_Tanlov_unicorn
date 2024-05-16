import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import "./course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainCours = () => {
  return (
    <section className="section section-lg section-bottom-0 mt-8">
      <div className="container">
        <div className="section-head">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9 col-xxl-8">
              <h2 className="title h1">
                <span className="text-gradient-primary"> Privacy </span>{" "}
                Protected
              </h2>
            </div>
          </div>
        </div>
        <div className="section-content  section-wrap-angle bg-darker bg-shadowed is-dark rounded-4 has-shape">
          <div className="nk-shape bg-shape-border-custom mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>
          <div className="nk-shape bg-shape-border-custom_c mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>
          <div className="row gy-5 justify-content-center">
            <div className="col-xxl-12">
              <div className="p-5 p-lg-6 rounded-4  shadow-sm">
                <div className="row g-gs flex-lg-row-reverse justify-content-between align-items-center">
                  <div className="col-lg-6 col-xl-5">
                    <div>
                      <div className="rounded-4 bg-gradient-primary bg-opacity-50 p-5 pe-0">
                        <div className="block-gfx me-n4">
                          <video
                            className="w-100 rounded-4 bg-shadowed"
                            width="560"
                            src="../assets/priv.mp4"
                            muted
                            autoPlay
                            loop
                          ></video>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xxl-5">
                    <div className="block-text pe-xl-5">
                      <div className="media media-2xl media-middle border border-info border-opacity-25 text-bg-info-soft rounded-2 mb-2">
                        <div className="d-inline-flex">
                          <FontAwesomeIcon icon={faShieldAlt} />
                        </div>
                      </div>
                      <h3 className="title">
                        Let your movements remain concealed
                      </h3>
                      <p>
                        <strong>
                          {" "}
                          No one can see you work out, not even us.{" "}
                        </strong>{" "}
                        Rest assured, neither EliteFit.AI nor anyone else can
                        see you during your workout. To provide you with the
                        required real-time feedback, we simply require data from
                        your poses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
