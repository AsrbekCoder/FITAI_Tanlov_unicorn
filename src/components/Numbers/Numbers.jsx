import CountUp from "react-countup";
export const Numbers = () => {
  return (
    <section className="section section-lg section-bottom-0">
      <div className="nk-shape bg-shape-blur-a mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>
      <div className="nk-shape bg-shape-blur-c mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>

      <div className="container">
        <div className="section-head">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-xl-9 px-xxl-5">
              <h2 className="title h1">
                Important
                <span className="text-gradient-primary"> Numbers </span>
                <p className="lead mt-3 text-muted">
                  Elevate Your Fitness, Grow With Us: Your Health, Your Journey,
                  Our Commitment
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row gx-5 gy-6 align-items-center justify-content-lg-between">
            <div className="col-xxl-3 col-xl-3 col-lg-6 text-center">
              <h1>
                {" "}
                +<CountUp end={78} duration={10} />{" "}
              </h1>
              <p>Demo Users </p>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 text-center">
              <h1>
                {" "}
                +<CountUp end={15680} duration={10} />{" "}
              </h1>
              <p>Interested users</p>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 text-center">
              <h1>
                {" "}
                <CountUp end={3} duration={10} />{" "}
              </h1>
              <p>Partners</p>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 text-center">
              <h1>
                {" "}
                <CountUp end={1} duration={10} />{" "}
              </h1>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
