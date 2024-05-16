import { faNutritionix, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faPersonRunning,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Course = () => {
  return (
    <section className="section mt-8 section-bottom-0">
      <div className="container">
        <div className="section-content">
          <div className="row gx-gs gy-6 justify-content-center align-items-center">
            <div className="col-xl-5 col-lg-8">
              <div className="block-text pe-xxl-7 text-center text-xl-start">
                <h2 className="title">
                  <span className="text-gradient-primary"> All-in-One </span>{" "}
                  System
                </h2>
                <p className="lead">
                  Experience the power of our All-in-One System, designed to
                  revolutionize your fitness journey. Fit AI integrates
                  cutting-edge technologies to provide a comprehensive and
                  personalized experience.
                </p>
                <ul className="btn-list btn-list-inline gy-0">
                  <li>
                    <Link to="/ai-trainer" className="btn_gradient">
                      <span>See how it works</span>
                      <em className="icon ni ni-arrow-long-right"></em>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card rounded-4 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-lg text-white bg-gradient-primary rounded-3">
                            <FontAwesomeIcon icon={faPersonRunning} />
                          </div>
                        </div>
                        <div className="feature-text">
                          <h3 className="title">AI Trainer</h3>
                          <p>
                            Our AI Trainer offers personalized workout guidance,
                            ensuring that every exercise is tailored to your
                            fitness level and goals. Receive real-time feedback
                            on your form for optimal results.
                          </p>
                        </div>{" "}
                        <Link
                          to={"/ai-trainer"}
                          className="btn_gradient rounded-3 text-center text-white py-2"
                        >
                          Show more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card rounded-4 border-0 shadow-sm mt-gs">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-lg text-white bg-gradient-primary rounded-3">
                            <FontAwesomeIcon icon={faVolumeHigh} />
                          </div>
                        </div>
                        <div className="feature-text">
                          <h3 className="title">AI Voice assistant</h3>
                          <p>
                            Immerse yourself in guided workouts with our AI
                            Voice feature. Follow voice instructions for each
                            movement, making your workout sessions seamless and
                            effective.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-5">
                  <div className="card rounded-4 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-lg text-white bg-gradient-primary rounded-3">
                            <FontAwesomeIcon icon={faNutritionix} />
                          </div>
                        </div>
                        <div className="feature-text">
                          <h3 className="title">AI Nutrition</h3>
                          <p>
                            Elevate your nutrition with our AI Nutrition system.
                            Receive personalized recommendations based on your
                            health profile, helping you achieve a balanced and
                            customized diet.
                          </p>
                        </div>{" "}
                        <Link
                          to={"/ai-nutrition"}
                          className="btn_gradient rounded-3 text-center text-white py-2"
                        >
                          Show more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card rounded-4 border-0 shadow-sm mt-gs">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-lg text-white bg-gradient-primary rounded-3">
                            <FontAwesomeIcon icon={faYoutube} />
                          </div>
                        </div>
                        <div className="feature-text">
                          <h3 className="title">AI Shorts</h3>
                          <p>
                            Experience quick and effective workout routines with
                            our AI Shorts feature. Short on time? AI Shorts
                            provides efficient and targeted exercises to fit
                            into your busy schedule.
                          </p>
                        </div>
                      </div>
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
