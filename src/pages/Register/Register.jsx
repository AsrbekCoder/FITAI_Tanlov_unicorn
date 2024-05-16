import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <main className="nk-pages">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Personal AI Trainer" />
        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection, Ai Trainer, Ai Nutrtion"
        />
      </Helmet>
      <div className="min-vh-100 d-flex flex-column has-mask">
        <div className="nk-mask bg-pattern-dot bg-blend-around"></div>
        <div className="text-center mb-4">
          <Link to="/" className="logo-link">
            <div className="logo-wrap">
              <img
                className="logo-img_alt"
                src="../assets/logofit.png"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="my-auto">
          <div className="container">
            <div className="row g-gs justify-content-center">
              <div className="col-md-7 col-lg-6 col-xl-5">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <h4 className="mb-3">Sign up here!</h4>
                    <form>
                      <div className="row g-4">
                        <div className="col-12">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="emailorusername"
                            >
                              Email or Username
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="email"
                                name="emailorusername"
                                id="emailorusername"
                                className="form-control form-control-lg"
                                placeholder="Enter Email or Username"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="toggle-password"
                            >
                              Password
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="password"
                                name="password"
                                id="toggle-password"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <button
                              className="btn_gradient"
                              type="submit"
                              id="submit-btn"
                            >
                              Register
                            </button>
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <div className="small mb-3">or register with</div>
                          <ul className="btn-list btn-list-inline gx-2">
                            <li>
                              <a className="btn btn-light btn-icon btn-lg">
                                <em className="icon fs-5 ni ni-google"></em>
                              </a>
                            </li>
                          </ul>
                          <p className="mt-4">
                            If you have a accaunt?{" "}
                            <Link to="/login">Login</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-heading mt-4 mb-6">&copy; 2023 FitAI.</p>
      </div>
    </main>
  );
};

export default Register;
