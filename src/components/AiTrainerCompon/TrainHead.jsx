export const TrainHead = () => {
  return (
    <div
      className="nk-hero pt-sm-5 pt-lg-5 pb-6 pb-sm-8 pb-lg-9 "
      style={{ marginTop: "60px" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-xl-between flex-lg-row-reverse g-gs">
          <div className="col-md-11 col-lg-9 col-xl-6 col-xxl-6">
            <div className="nk-hero-content text-center text-xl-start">
              <h1 className="title display-9 mb-3 mb-lg-4">
                Unlock Your Personalized{" "}
                <span className="text-gradient-primary"> Fitness Journey </span>
              </h1>
              <p className="lead mb-4 mb-lg-5 pe-xxl-6">
                Welcome to{" "}
                <span className="text-gradient-primary"> FitAI </span>, where
                cutting-edge technology meets personalized fitness. Our{" "}
                <span className="text-gradient-primary"> AI Trainer </span>
                is here to guide you through a fitness experience tailored just
                for you
              </p>
            </div>
          </div>
          <div className="col-sm-10 col-md-7 col-lg-6 col-xl-5">
            <div className="p-1 rounded-3 bg-gradient-primary ">
              <video
                className="w-100"
                width="560"
                src="../assets/aitrainer.mp4"
                muted
                autoPlay
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
