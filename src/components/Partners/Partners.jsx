import { Link } from "react-router-dom";

export const Partners = () => {
  return (
    <section className="section section-lg section-bottom-0 ">
      <div className="nk-shape bg-shape-border-c mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>

      <div className="container">
        <div className="section-content">
          <h1 className="title text-center mb-6 text-gradient-primary">
            Pricing
          </h1>
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
                        <span>Flexible pricing based on your requirements</span>
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
  );
};
