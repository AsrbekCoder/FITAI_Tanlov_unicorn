export const MainAcademy = () => {
  return (
    <section
      className="section section-lg section-bottom-0"
      style={{ marginTop: "120px" }}
    >
      <div className="container">
        <div className="section-head">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-xl-9 px-xxl-5">
              <h2 className="title h1">
                Why Fit<span className="text-gradient-primary">AI </span>?
              </h2>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row gx-5 gy-6 align-items-center justify-content-lg-between">
            <div className="col-lg-6 col-xl-5">
              <div className="block-gfx ms-lg-n4 me-lg-0 me-xl-n6 my-lg-0 m-n3 m-sm-n4 shadow">
                <img className="w-100" src="../assets/pose1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="block-text">
                <h2 className="title">
                  Fit<span className="text-gradient-primary">AI</span> is your{" "}
                  personalized fitness assistant.
                </h2>
                <p className="lead">
                  Achieve your fitness goals powered by artificial intelligence
                  from the comfort of your anywhere .
                </p>
                <ul className="list gy-3">
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      AI-powered workout recommendations based on your health,
                      height, and weight.
                    </span>
                  </li>
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>Exercise plans designed for anywhere workouts.</span>
                  </li>
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      Real-time feedback on your workout form using computer
                      vision.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row gx-5 gy-6 align-items-center justify-content-lg-between">
            <div className="col-lg-6 col-xl-6">
              <div className="block-text">
                <h2 className="title">
                  {" "}
                  Pose{" "}
                  <span className="text-gradient-primary"> Detection </span>
                </h2>
                <p className="lead">
                  Fit AI utilizes advanced pose detection technology to analyze
                  and assess your body movements during workouts. Our computer
                  vision algorithms track key points in your body, ensuring that
                  you perform exercises with proper form and effectiveness.
                </p>
                <ul className="list gy-3">
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      Receive instant feedback on your form to prevent injuries
                      and enhance workout effectiveness.
                    </span>
                  </li>
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      Guided workouts with visual cues based on your real-time
                      movements.
                    </span>
                  </li>
                  <li>
                    <em className="icon fs-4 ni ni-check-circle-fill text-info"></em>
                    <span>
                      Personalized adjustments to your exercise plan based on
                      your performance.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="block-gfx ms-lg-n4 me-lg-0 me-xl-n6 my-lg-0 m-n3 m-sm-n4 shadow">
                <img className="w-100" src="../assets/pose2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
