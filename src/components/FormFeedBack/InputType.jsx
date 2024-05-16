import { useForm } from "react-hook-form";
import { apiAxios, endpoints } from "../../service";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import dataCourName from "../../db.json";
import PropTypes from "prop-types";

const InputType = ({ feedBackCourse, xMark = false, setPopupToggle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorApi, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const handlePhoneChange = (value) => {
    setPhoneNumber(value.target.value);
  };

  const submit = async (obj) => {
    setIsloading(true);
    try {
      const { data } = await apiAxios.post(endpoints.createUser, obj);
      setIsloading(false);
      reset();
      setPhoneNumber("");
      if (data) {
        setPopupToggle(false);
        location.reload();
      }
    } catch (error) {
      setError(error);
      setIsloading(false);
    }
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body">
        {xMark && (
          <div className="x-mark" onClick={() => setPopupToggle(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        )}
        <form onSubmit={handleSubmit(submit)}>
          <div className="row g-4">
            <div className="col-12">
              <div className="form-group">
                <label className="form-label">Ismingiz</label>
                <div className="form-control-wrap">
                  <input
                    type="Text"
                    name="user_name"
                    className="form-control form-control-lg"
                    placeholder="Ismingizni kiriting"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors?.name && (
                  <p className="mt-2 text-danger">
                    &#9888; Ismingizni kiriting
                  </p>
                )}
              </div>
            </div>
            {feedBackCourse && (
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Kursni tanlang</label>
                  <div className="form-control-wrap">
                    <a className="form-control-icon end">
                      <em className="on icon ni ni-chevron-down"></em>
                    </a>
                    <select className="form-control form-control-lg">
                      {dataCourName.map((item, idx) => {
                        return (
                          <option key={idx} value="">
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="col-12">
              <div className="form-group">
                <label className="form-label">Telefon raqamingiz</label>
                <div className="form-control-wrap">
                  <InputMask
                    name="phoneNumber"
                    type="tel"
                    className="form-control form-control-lg"
                    {...register("phonenumber", { required: true })}
                    // eslint-disable-next-line no-nonoctal-decimal-escape
                    mask="+\9\98 (99) 999 99 99"
                    placeholder="+998 (__) ___ __ __"
                    onChange={handlePhoneChange}
                    value={phoneNumber}
                  />
                  {errors?.phonenumber && (
                    <p className="mt-2 text-danger">
                      &#9888; Raqamingizni kiriting
                    </p>
                  )}
                </div>
              </div>
            </div>
            <p>*Iltimos ma&lsquo;lumotingizni aniq va to&lsquo;liq kiritng</p>
            <div className="col-12">
              <div className="form-group">
                <button
                  className="btn_gradient d-flex justify-content-center align-items-center gap-2"
                  style={{ borderColor: "none !important" }}
                  type="submit"
                >
                  <span>Yuborish</span>
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
  );
};

InputType.propTypes = {
  feedBackCourse: PropTypes.bool,
  xMark: PropTypes.bool,
  setPopupToggle: PropTypes.func,
};

export default InputType;
