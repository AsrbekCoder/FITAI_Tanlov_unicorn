import { useState } from "react";
import "./contact.css";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { apiAxios, endpoints } from "../../service";
import ClipLoader from "react-spinners/ClipLoader";
import { useToast } from "@chakra-ui/react";

export const Contact = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsloading] = useState(false);

  const submit = async (obj) => {
    setIsloading(true);
    try {
      const { data } = await apiAxios.post(endpoints.createUser, obj);
      setIsloading(false);
      if (data) {
        toast({
          status: "success",
          title: "Congratulations you successfuly send request a demo",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          fontSize: "7px",
        });
      }
      reset();
    } catch (error) {
      setIsloading(false);
    }
  };

  return (
    <section className="section section-lg section-0 my-5">
      <div className="container">
        <div className="section-wrap section-wrap-angle bg-darker bg-shadowed is-dark rounded-4 has-shape">
          <div className="section-content p-4 pt-3 pt-sm-5 p-sm-6 overflow-hidden">
            <div className="nk-shape bg-shape-blur-n mt-n10p ms-n10p"></div>
            <div className="row justify-content-center  align-items-center">
              <div className="col-lg-6 ">
                <div className="block-text">
                  <h2 className="title">
                    Want to know more? <br />
                    <span className="text-gradient-primary"> Contact </span> us
                    today!
                  </h2>
                  <p className="lead mt-3">
                    Ready to kickstart your fitness journey? Request a demo now
                    and experience the future of anywhere fitness.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 py-3">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <form onSubmit={handleSubmit(submit)}>
                      <div className="row g-4">
                        <div className="col-xxl-6 col-md-12">
                          <div className="form-group">
                            <label className="form-label">Name *</label>
                            <div className="form-control-wrap">
                              <input
                                type="Text"
                                name="user_name"
                                className="form-control form-control-lg"
                                placeholder="Your name"
                                {...register("name", { required: true })}
                              />
                            </div>
                            {errors?.name && (
                              <p className="mt-2 text-danger">
                                &#9888; Name is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-xxl-6 col-md-12">
                          <div className="form-group">
                            <label className="form-label">
                              Business Email *
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="Text"
                                name="user_name"
                                className="form-control form-control-lg"
                                placeholder="Your email"
                                {...register("email", { required: true })}
                              />
                            </div>
                            {errors?.email && (
                              <p className="mt-2 text-danger">
                                &#9888; Email is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label">
                              How did you hear about us?
                            </label>
                            <div className="form-control-wrap">
                              <input
                                type="Text"
                                name="user_name"
                                className="form-control form-control-lg"
                                placeholder="Your answer here"
                                {...register("hear_from")}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label">Comments</label>
                            <div className="form-control-wrap">
                              <textarea
                                type="Text"
                                name="user_name"
                                className="form-control form-control-lg"
                                placeholder="Your comments here"
                                {...register("context")}
                              />
                            </div>
                          </div>
                        </div>
                        <p>
                          *Please provide accurate and complete information
                          enter
                        </p>
                        <div className="col-12">
                          <div className="form-group">
                            <button
                              className="btn_gradient d-flex justify-content-center align-items-center gap-2"
                              style={{ borderColor: "none !important" }}
                              type="submit"
                            >
                              <span>Request a demo</span>
                              {isLoading && (
                                <ClipLoader
                                  size={"25px"}
                                  aria-label="Loading Spinner"
                                  color="#fff"
                                />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
