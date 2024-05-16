import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const routeLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "AI Tools",
    link: "/",
    menuItems: [
      { name: "AI Trainer", link: "/ai-trainer" },
      { name: "AI Nutrition", link: "/ai-nutrition" },
    ],
    icon: faChevronDown,
  },
  {
    name: "About FitAI",
    link: "/courses",
    menuItems: [
      { name: "Terms & Conditions", link: "/terms" },
      { name: "Pricing", link: "/pricing" },
    ],
    icon: faChevronDown,
  },
  {
    name: "Sign In",
    link: "/login",
  },
];

export const Header = ({ children }) => {
  const [menutoggle, setMenuToggle] = useState(false);
  const [getIdx, setIdx] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const handleToggleMenu = () => {
    setMenuToggle((e) => !e);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 0;

      setScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGetNumbe = (idx) => {
    setIdx(idx);
    if (getIdx === idx) {
      setIdx(null);
    }
  };

  useEffect(() => {
    menutoggle
      ? document.querySelector("body").classList.add("header-menu-shown")
      : document.querySelector("body").classList.remove("header-menu-shown");
  }, [menutoggle]);

  return (
    <header className="nk-header has-shape">
      {location.pathname === "/" && (
        <div className="video_overlay">
          <video
            src="../assets/video.mp4"
            loop
            muted
            autoPlay
            className="video_box"
          ></video>
          <div className="overlay_box"></div>
        </div>
      )}
      {location.pathname === "/" ? (
        <>
          <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x"></div>
          <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x"></div>
          <div className="nk-shape bg-shape-border-a mt-n10 ms-40p start-50 top-100 translate-middle-x"></div>
          <div className="nk-shape bg-shape-border-b mt-n9 ms-30p start-50 translate-middle-x"></div>
          <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x"></div>
        </>
      ) : (
        <>
          <div className="nk-shape bg-shape-blur-r mt-n20p ms-10p start-50 translate-middle-x"></div>
          <div
            className="nk-shape bg-shape-blur-c mt-n10p ms-n10p start-50 translate-middle-x"
            style={{ opacity: "0.4" }}
          ></div>
        </>
      )}
      <div
        className={
          !isScrolled
            ? "nk-header-main nk-menu-main will-shrink is-transparent on-dark ignore-mask"
            : "nk-header-main nk-menu-main will-shrink is-transparent on-dark ignore-mask has-fixed"
        }
      >
        <div className="container">
          <div className="nk-header-wrap">
            <nav className="navbar_nav">
              <div className="nk-header-logo">
                <Link to="/" className="logo-link">
                  <div className="logo-wrap">
                    <img
                      className="logo-img_alt"
                      src="../assets/logofit.png"
                      alt="imghere"
                    />
                  </div>
                </Link>
              </div>
              <ul className={menutoggle ? "nav_menu is-open" : "nav_menu"}>
                {routeLinks.map((item, idx) => (
                  <li className="nav_item" key={idx}>
                    <Link
                      className={
                        !item.menuItems
                          ? location.pathname === item.link
                            ? "nav_link active"
                            : "nav_link"
                          : "nav_link"
                      }
                      onClick={() => handleGetNumbe(idx)}
                      to={!item.menuItems && item.link}
                    >
                      <span> {item.name} </span>
                      {item.icon && (
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{
                            transform:
                              idx === getIdx ? "rotate(-180deg)" : "rotate(0)",
                            transition: "0.3s",
                          }}
                        />
                      )}
                    </Link>
                    {item?.menuItems && (
                      <ul
                        className={
                          getIdx === idx
                            ? "menu_list_child active"
                            : "menu_list_child"
                        }
                      >
                        {item?.menuItems.map((elem) => (
                          <li
                            key={elem.name}
                            className={
                              location.pathname === elem.link
                                ? "actived"
                                : "none"
                            }
                          >
                            <Link
                              onClick={() => setMenuToggle(false)}
                              to={elem.link}
                            >
                              <span> {elem.name} </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li>
                  <Link to="/try-demo" className="btn_gradient">
                    Try Now
                  </Link>
                </li>
              </ul>
              <button
                id="burger"
                className={
                  menutoggle ? "open-main-nav is-open" : "open-main-nav "
                }
                onClick={handleToggleMenu}
              >
                <span className="burger"></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
