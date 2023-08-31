import { useContext } from "react";
import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";

const Home = ({ leftImg, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);

  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      <div className="main-text-container">
        {leftImg && (
          <img
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : "img/leftimage-dark.jpg"}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
            {`I'm`} Enthusiastic and skilled WordPress Developer with 2 years of
            experience creating dynamic and visually appealing websites.
            Proficient in HTML, CSS, Bootstrap, Tailwind, PHP, and JavaScript.
            Currently expanding expertise into React.js. Committed to delivering
            high-quality web solutions that meet client objectives and exceed
            expectations.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
