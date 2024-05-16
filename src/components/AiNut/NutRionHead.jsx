export const NutRionHead = () => {
  return (
    <div className="nk-hero py-xl-5 overflow-hidden has-shape">
      <div className="nk-shape bg-shape-blur-b mt-n5 start-50 top-50 translate-middle"></div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-11 col-xl-10 col-xxl-9">
            <div className="nk-hero-content py-5 py-lg-6">
              <h1 className="title mb-3 mb-lg-4 display-6">
                Your personal{" "}
                <span className="text-gradient-primary"> AI nutritionist</span>
              </h1>
              <p className="lead text-light px-md-8 px-lg-6 px-xxl-12 mb-4 mb-lg-5">
                Welcome to FitAI&apos;s AI Nutrition, your key to achieving
                optimal health through personalized nutrition plans.
              </p>
            </div>
            <div className="nk-hero-gfx position-relative">
              <img
                className="w-100 rounded-4"
                src="images/gfx/banner/c.jpg"
                alt=""
              />
              <div className="d-none d-md-block position-absolute top-0 end-100 me-5 me-lg-8 me-xl-12 mt-n3">
                <div className="badge bg-primary  p-2 mt-8 fw-normal text-white text-opacity-75">
                  Nutrient Tracking
                </div>
              </div>
              <div className="d-none d-md-block position-absolute top-50 end-100 me-3 me-lg-4 mt-n5">
                <div className="badge bg-primary  p-2 mt-2 fw-normal text-white text-opacity-75">
                  Recipe Suggestions
                </div>
              </div>
              <div className="d-none d-md-block position-absolute top-0 start-100 ms-5 ms-lg-7 ms-xl-10 mt-n7">
                <div className="badge bg-primary  p-2 mt-2 fw-normal text-white text-opacity-75">
                  Personalized Meal Plans
                </div>
              </div>
              <div className="d-none d-md-block position-absolute top-50 start-100 ms-4 ms-lg-5 mt-n2">
                <div className="badge bg-primary  p-2 mt-4 fw-normal text-white text-opacity-75">
                  Dietary Guidance
                </div>
              </div>
            </div>
            <div className="nk-hero-content py-6">
              <h6 className="lead-text">
                We’re building a leading personalized nutrition platform
              </h6>
              <ul className="d-flex flex-wrap justify-content-center pt-4 has-gap gy-3">
                <li className="px-3 px-sm-5">
                  <img
                    className="h-2rem"
                    src="images/brands/72-b-white.png"
                    alt=""
                  />
                </li>
                <li className="px-3 px-sm-5">
                  <img
                    className="h-2rem"
                    src="images/brands/72-c-white.png"
                    alt=""
                  />
                </li>
                <li className="px-3 px-sm-5">
                  <img
                    className="h-2rem"
                    src="images/brands/72-d-white.png"
                    alt=""
                  />
                </li>
                <li className="px-3 px-sm-5">
                  <img
                    className="h-2rem"
                    src="images/brands/72-e-white.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
