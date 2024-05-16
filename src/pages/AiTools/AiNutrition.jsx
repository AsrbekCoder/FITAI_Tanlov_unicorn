import { Helmet } from "react-helmet";
import { NutBlogs, NutRionHead, NutSection } from "../../components";
import { Link } from "react-router-dom";

export const AiNutrition = () => {
  return (
    <>
      <Helmet>
        <title>AI Nutrition - Your personal AI nutritionist</title>
        <meta name="description" content="Personal AI Trainer" />
        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection, Ai Trainer, Ai Nutrtion"
        />
      </Helmet>
      <div className="video_overlay">
        <img
          src="../assets/calorie.jfif"
          style={{ height: "600px" }}
          className="video_box"
        ></img>
        <div className="overlay_box" style={{ height: "600px" }}></div>
      </div>
      <NutRionHead />
      <br />
      <br />
      <br />
      <br />

      <NutSection />
      <br />
      <br />
      <NutBlogs />
      <section
        className="section section-0 has-mask"
        style={{ marginTop: "100px" }}
      >
        <div className="nk-mask bg-darker top-50"></div>
        <div className="container container-xl">
          <div className="section-wrap bg- is-dark rounded-4 has-shape overflow-hidden shadowed_bg-color">
            <div className="nk-shape bg-shape-blur-c start-50 top-50 translate-middle"></div>
            <div className="section-content p-4 p-sm-5 p-xl-7">
              <div className="row justify-content-between align-items-center g-5">
                <div className="col-xl-5 col-lg-6">
                  <div className="block-text">
                    <h6 className="overline-title text-primary">
                      Be healthy with us
                    </h6>
                    <h2 className="title">
                      Ready to fuel your fitness with personalized nutrition?{" "}
                    </h2>
                    <p className="lead">Start using the AI Nutritionist!</p>
                    <ul className="mt-3">
                      <li>
                        <Link to="/request" className="btn_gradient">
                          <span>Request a demo</span>
                          <em className="icon ni ni-arrow-long-right"></em>
                        </Link>
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
                          src="../assets/calorie.jfif"
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
      <br />
    </>
  );
};
