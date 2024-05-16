import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
        <meta name="description" content="Personal AI Trainer" />
        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection, Ai Trainer, Ai Nutrtion"
        />
      </Helmet>
      <div className="nk-page-head">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="badge bg-gradient-primary text-uppercase text-tracking-1 rounded-pill px-3 py-2 mb-3">
                Pricing
              </div>
              <h2 className="title h1">
                Plans that{" "}
                <span className="text-gradient-primary">start free</span> and
                fits with your needs
              </h2>
              <p className="lead">
                Choose the plan that fits your fitness goals and start your
                journey with FitAI
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="section section-bottom-0  rounded-top-6">
        <div className="container">
          <div className="section-content">
            <div className="row g-gs">
              <div className="col-xxl-4 col-xl-4">
                <div className="pricing h-100 pricing-featured bg-gradient-primary">
                  <div className="pricing-body h-100 p-5 pt-3 p-md-0 pt-md-0 p-xl-5 pt-xl-3 d-md-flex d-xl-block">
                    <div className="text-center p-md-5 p-xl-0 w-md-50 w-xl-100">
                      <div className="badge bg-gradient-primary bg-opacity-20 gradient-angle-90 mb-4 px-3 py-2 rounded-pill small text-light text-tracking-1">
                        <div className="p-1">Premium Plan (Most Popular)</div>
                      </div>
                      <h3 className="mb-3">Pro</h3>
                      <div className="pricing-price-wrap">
                        <div className="pricing-price monthly">
                          <h3 className="display-5 mb-3">
                            $19
                            <span className="caption-text text-muted">
                              / month
                            </span>
                          </h3>
                        </div>
                      </div>
                      <p className="fw-bold ">
                        Unlock the ultimate fitness experience with our Premium
                        Plan
                      </p>
                      <div className="mt-4">
                        <Link to="/demo-test">
                          <button className="btn_gradient">
                            Signed up for waitlist
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="d-none d-md-block d-xl-none border-start h-100"></div>
                    <div className="pt-4 p-md-5 p-xl-0 pt-xl-4 w-md-50 w-xl-100">
                      <ul className="list gy-3">
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>Full access to personalized workout plans</span>
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>Real-time feedback on your exercise form</span>
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          Advanced analytics to track your progress
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          AI Trainer: Personalized workout guidance
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          AI Nutrition: Customized nutrition recommendations
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          AI Voice: Voice-guided workouts
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          Priority access to new features
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6 order-xl-first">
                <div className="h-100 pt-xl-6">
                  <div className="pricing h-100">
                    <div className="pricing-body h-100 p-5">
                      <div className="text-center">
                        <h3 className="mb-3">Free</h3>
                        <h3 className="display-5 mb-3">
                          $0
                          <span className="caption-text text-muted">
                            / weekly
                          </span>
                        </h3>
                        <p className="fw-bold">
                          Get started with our free plan and enjoy the following
                          features
                        </p>

                        <div className="mt-4">
                          <Link to="/try-demo">
                            <button className="btn_gradient">Try now</button>
                          </Link>
                        </div>
                      </div>
                      <ul className="list gy-3 mt-8">
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>Personalized workout recommendations</span>
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>Basic exercise plans</span>
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>Limited access to premium features</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6">
                <div className="h-100 pt-xl-6">
                  <div className="pricing h-100">
                    <div className="pricing-body h-100 p-5">
                      <div className="text-center">
                        <h3 className="mb-3">Custom</h3>
                        <div className="media media-middle media-2xl bg-light rounded-pill mb-4 mt-3">
                          <em className="icon ni ni-building"></em>
                        </div>
                        <p className="fw-bold">
                          If our standard plans don&apos;t meet your specific
                          needs, we offer custom plans tailored just for you
                        </p>

                        <div className="mt-2">
                          <Link to="/demo-test">
                            <button className="btn_gradient">
                              Signed up for waitlist
                            </button>
                          </Link>
                        </div>
                      </div>
                      <ul className="list gy-3 mt-4">
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>Custom pricing</span>
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>Choose specific features and services</span>
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>
                            Flexible pricing based on your requirements
                          </span>
                        </li>
                        <li>
                          <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                          <span>
                            Direct consultation with our fitness experts
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="section section-0 has-mask">
        <div className="nk-mask bg-darker top-50"></div>
        <div className="container container-xl">
          <div className="section-wrap bg-dark is-dark rounded-4 has-shape overflow-hidden">
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
                        <Link to="/request" className="btn_gradient">
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
                          src="../assets/pose2.jpeg"
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
