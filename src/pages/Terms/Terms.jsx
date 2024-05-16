import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Terms = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Terms and Conditions</title>
        <meta name="description" content="Personal AI Trainer" />
        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection, Ai Trainer, Ai Nutrtion"
        />
      </Helmet>
      <section className="section section-bottom-0 has-mask">
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
        <div className="container">
          <div className="section-content">
            <div className="row g-gs justify-content-center">
              <div className="col-xxl-8 col-xl-9 col-lg-10">
                <div className="text-center mb-6">
                  <h6 className="overline-title text-primary">FITAI</h6>
                  <h1 className="title">Terms and Conditions</h1>
                  <ul className="list list-row gx-2">
                    <li>
                      <div className="sub-text fs-5">
                        Last Updated Nov 16, 2023
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="block-typo">
                  <h3> Welcome to Fit AI!</h3>
                  <p>
                    These Terms and Conditions outline the rules and regulations
                    for using our services. By accessing or using our website,
                    you agree to be bound by these terms.
                  </p>

                  <h3>Intellectual Property</h3>
                  <p>
                    The content, features, and functionality of Fit AI,
                    including but not limited to text, graphics, logos, images,
                    and software, are the property of Fit AI and are protected
                    by international copyright, trademark, patent, trade secret,
                    and other intellectual property or proprietary rights laws.
                  </p>

                  <h3>Use License</h3>
                  <p>
                    Permission is granted to temporarily download one copy of
                    the materials on Fit AI&apos;s website for personal,
                    non-commercial transitory viewing only. This is the grant of
                    a license, not a transfer of title.
                  </p>

                  <h3>Disclaimer</h3>
                  <p>
                    Fit AI is not a licensed medical care provider. Consult with
                    a qualified healthcare professional before starting any
                    fitness program. The use of Fit AI&apos;s services is at
                    your own risk. Fit AI disclaims any responsibility for any
                    injury or harm resulting from engaging in fitness activities
                    suggested by our platform.
                  </p>

                  <h3>Account Registration</h3>
                  <p>
                    To access certain features of Fit AI, you may be required to
                    register for an account. You agree to provide accurate,
                    current, and complete information during the registration
                    process and to update such information to keep it accurate,
                    current, and complete.
                  </p>

                  <h3>Termination</h3>
                  <p>
                    Fit AI reserves the right to terminate or suspend your
                    account and access to the services immediately, without
                    prior notice or liability, for any reason whatsoever,
                    including without limitation if you breach the Terms.
                  </p>

                  <h3>Changes to Terms</h3>
                  <p>
                    Fit AI may revise these Terms and Conditions at any time
                    without notice. By using this website, you agree to be bound
                    by the then-current version of these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-bottom-0">
        <div className="container">
          <div className="section-wrap bg-primary bg-opacity-10 rounded-4">
            <div className="section-content bg-pattern-dot-sm p-4 p-sm-6">
              <div className="row justify-content-center text-center">
                <div className="col-xl-8 col-xxl-9">
                  <div className="block-text">
                    <h6 className="overline-title text-primary">
                      Be healthy with us
                    </h6>
                    <h2 className="title">
                      Ready to kickstart your fitness journey?
                    </h2>
                    <p className="lead mt-3">
                      Request a demo now and experience the future of
                      at-anywhere fitness.
                    </p>
                    <ul className="btn-list btn-list-inline">
                      <li>
                        <Link to="/request" className="btn_gradient">
                          <span>Request a demo</span>
                          <em className="icon ni ni-arrow-long-right"></em>
                        </Link>
                      </li>
                    </ul>
                    <ul className="list list-row gy-0 gx-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
