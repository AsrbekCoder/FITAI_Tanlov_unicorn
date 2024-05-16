import "./map.css";
export const Map = () => {
  return (
    <section className="section section-lg section-bottom-0">
      <div className="nk-shape bg-shape-blur-a mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>
      <div className="nk-shape bg-shape-blur-c mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>

      <div className="container">
        <div className="section-head">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-xl-9 px-xxl-5">
              <h2 className="title h1">
                Increase
                <span className="text-gradient-primary"> revenue. </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row gx-5 gy-6 align-items-center justify-content-lg-between">
            <div className="col-lg-6 col-xl-5">
              <div className="block-gfx ms-lg-n4 me-lg-0 me-xl-n6 my-lg-0 m-n3 m-sm-n4 ">
                <img className="w-100" src="../assets/tayyor.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="block-text">
                <h3 className="title">
                  Increase Revenue with Fitness Improvement.
                </h3>
                <p className="lead">
                  From tracking form accuracy to calculating calories burnt and
                  amongst other important data, provide a unique experience for
                  your users to achieve their goals and your business goals too.
                </p>
                <ul className="list gy-3">
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      {" "}
                      Track your progress with our Workout Score feature.
                      Receive a personalized score after each workout,
                      motivating you to improve over time. Higher scores
                      indicate increased fitness levels, translating to better
                      overall health and potential financial gains.
                    </span>
                  </li>
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      Time is money. Our system prioritizes efficient workouts
                      with AI Shorts and AI Trainer, helping you make the most
                      of your time. Spend less time planning and more time
                      achieving your fitness goals, creating opportunities for
                      increased productivity and revenue.
                    </span>
                  </li>
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      Understand your calorie burn with our advanced analytics.
                      Gain insights into how your workouts impact your
                      metabolism and calorie expenditure. Achieving fitness
                      milestones can lead to increased energy levels and
                      potential long-term financial benefits.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
