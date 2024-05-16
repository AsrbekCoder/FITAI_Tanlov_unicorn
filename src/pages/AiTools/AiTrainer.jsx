import { Helmet } from "react-helmet";
import { HowItWorks, TrainHead } from "../../components";
import { Link } from "react-router-dom";

export const AiTrainer = () => {
  return (
    <>
      <Helmet>
        <title>AI trainer - Unlock Your Personalized Fitness Journes</title>
        <meta name="description" content="Personal AI Trainer" />
        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection, Ai Trainer"
        />
      </Helmet>
      <TrainHead />
      <HowItWorks />
      <section
        className="section section-0 has-mask"
        style={{ marginTop: "100px" }}
      >
        <div className="nk-mask bg-darker top-50"></div>
        <div className="container container-xl">
          <div className="section-wrap bg- is-dark rounded-4 has-shape overflow-hidden shadowed_bg-color">
            <div className="nk-shape bg-shape-blur-c start-50 top-50 translate-middle"></div>
            <div className="section-content p-4 p-sm-5 p-xl-7">
              <div className="row justify-content-between align-items-center g-5">
                <div className="col-xl-5 col-lg-6">
                  <div className="block-text">
                    <h6 className="overline-title text-primary">
                      Be healthy with us
                    </h6>
                    <h2 className="title">
                      Ready to kickstart your fitness journey?
                    </h2>
                    <p className="lead">
                      Request a demo now and experience the future of
                      at-anywhere fitness.
                    </p>
                    <ul className="mt-3">
                      <li>
                        <Link to={"/request"} className="btn_gradient">
                          <span>Request a demo</span>
                          <em className="icon ni ni-arrow-long-right"></em>
                        </Link>
                      </li>
                    </ul>
                    <ul className="list list-row gy-0 gx-3 mt-3">
                      <li>
                        <em className="icon ni ni-check-circle-fill text-success"></em>
                        <span>No credit card required</span>
                      </li>
                      <li>
                        <em className="icon ni ni-check-circle-fill text-success"></em>
                        <span>Cancel anytime</span>
                      </li>
                      <li>
                        <em className="icon ni ni-check-circle-fill text-success"></em>
                        <span>4+ ai tools to use</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 align-self-end">
                  <div className="bg-white rounded-top-4">
                    <div className="rounded-top-4 bg-gradient-primary bg-opacity-70 p-5 pb-0 mb-n4 mb-sm-n5 mb-xl-n7">
                      <div className="block-gfx">
                        <img
                          className="w-100 rounded-top-3 shadow-sm"
                          src="../assets/do.gif"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
