export const NutBlogs = () => {
  return (
    <div className="container mt-10">
      <div className="section-head">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9 col-xl-7 col-xxl-6">
            <h6 className="overline-title text-gradient-primary">Blog</h6>
            <h1 className="title">Read our blog</h1>
          </div>
        </div>
      </div>

      <div className="section-content">
        <div className="row g-gs">
          <div className="col-md-6 col-xl-4">
            <div className="card border-0 shadow-tiny rounded-4">
              <div className="card-body p-4">
                <a className="d-block">
                  <img
                    className="rounded-4 w-100"
                    src="../assets/nutrition_ai2.jpg"
                    style={{ height: 225, objectFit: "cover" }}
                    alt=""
                  />
                </a>
                <h3>
                  <div className="link-dark line-clamp-2 mt-4">
                    Unlocking the Power of Personalized Nutrition with FitAI
                  </div>
                </h3>
                <p className="lead">
                  Highlight the importance of personalized nutrition in
                  achieving fitness goals. Introduce FitAI&apos;s AI Nutrition
                  feature as a revolutionary tool for tailoring meal plans to
                  individual needs.
                </p>
                <button className="btn_gradient mt-3">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card border-0 shadow-tiny rounded-4">
              <div className="card-body p-4">
                <a className="d-block">
                  <img
                    className="rounded-4 w-100 "
                    style={{ height: 225, objectFit: "cover" }}
                    src="../assets/nutrition_ai3.jpg"
                    alt=""
                  />
                </a>
                <h3>
                  <div className="link-dark line-clamp-2 mt-4">
                    The Art of Nutrient Tracking: How FitAI Simplifies Your
                    Nutrition Journey
                  </div>
                </h3>
                <p className="lead">
                  Discuss the importance of tracking nutrient intake for a
                  balanced and healthy lifestyle. Introduce FitAI&apos;s AI
                  Nutrition feature as a tool for effortless nutrient tracking.
                </p>
                <button className="btn_gradient mt-3">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card border-0 shadow-tiny rounded-4">
              <div className="card-body p-4">
                <a className="d-block">
                  <img
                    className="rounded-4 w-100 "
                    style={{ height: 225, objectFit: "cover" }}
                    src="../assets/nutrtion_ai4.jpeg"
                    alt=""
                  />
                </a>
                <h3>
                  <div className="link-dark line-clamp-2 mt-4">
                    Savoring Health: Exploring Delicious and Nutritious Recipes
                    with FitAI&apos;s AI Nutritionist
                  </div>
                </h3>
                <p className="lead">
                  Discuss the misconception that healthy eating means
                  sacrificing flavor. Introduce FitAI&apos;s AI Nutritionist as
                  a guide to discovering delicious and nutritious recipes.
                </p>
                <button className="btn_gradient mt-3">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
