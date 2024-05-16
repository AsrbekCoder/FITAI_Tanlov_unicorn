export const NutSection = () => {
  return (
    <div className="container">
      <div className="section-content">
        <div className="row gx-5 gy-6 align-items-center justify-content-lg-between">
          <div className="col-lg-6 col-xl-5">
            <div className="block-gfx d-flex justify-content-center ms-lg-n4 me-lg-0 me-xl-n6 my-lg-0 m-n3 m-sm-n4 shadow">
              <img className="w-75" src="../assets/nutrition_ai1.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="block-text">
              <h2 className="title">
                Get answers to all your
                <span className="text-gradient-primary"> nutrition </span>
                related questions
              </h2>
              <p className="lead">
                We want everyone to have their own personal nutritionist. With
                Ai Nutrtion, you gain access to a set of features designed to
                provide you with personalized nutrition guidance, expert
                support, and a wealth of educational resources:
              </p>
              <ul className="list gy-3">
                <li>
                  <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                  <span>
                    AI-Powered Chat: Get instant answers to nutrition related
                    questions. It’s like having your own personal nutritionist
                    at your fingertips!
                  </span>
                </li>
                <li>
                  <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                  <span>
                    Nutrition Experts: Get specific support around topics like
                    Weight Loss, Meal Planning, Health & Wellness and Diabetes.
                  </span>
                </li>
                <li>
                  <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                  <span>
                    Informative Microblogs: Dive into our library of microblogs
                    and discover bite-sized educational content on a wide range
                    of nutrition topics, generate meal recipes and much more.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
