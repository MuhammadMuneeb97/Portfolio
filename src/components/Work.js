import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "Stradigi",
    format: "img",
    project: "WEBSITE",
    client: "Company-Project",
    duration: "3 MONTHS",
    technologies: ["WordPress / Elementor"],
    budget: "Don't Know",
    url: "https://www.stradigi.org/",
  },
  // {
  //   img: "img/projects/project-2.jpg",
  //   name: "Youtube Format",
  //   format: "youtube",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-3.jpg",
  //   name: "Slider Format",
  //   format: "slider",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  // {
  //   img: "img/projects/project-4.jpg",
  //   name: "Video Format",
  //   format: "video",
  //   project: "WEBSITE",
  //   client: "ENVATO",
  //   duration: "3 MONTHS",
  //   technologies: ["HTML", "JAVASCRIPT"],
  //   budget: "1550 USD",
  // },
  {
    img: "img/projects/project-2.jpg",
    name: "Route2Health",
    format: "img",
    project: "WEBSITE",
    client: "Company-Project",
    duration: "6 MONTHS",
    technologies: ["WordPress / Elementor , JAVASCRIPT"],
    budget: "Don't Know",
    url: "https://route2health.com/",
  },
  {
    img: "img/projects/project-3.jpg",
    name: "Swiss Natural",
    format: "img",
    project: "WEBSITE",
    client: "Company-Project",
    duration: "3 MONTHS",
    technologies: ["Shopify"],
    budget: "Don't Know",
    url: "https://swissnaturals.pk/",
  },
  {
    img: "img/projects/project-4.jpg",
    name: "Mobaso",
    format: "img",
    project: "WEBSITE",
    client: "Company-Project",
    duration: "3 MONTHS",
    technologies: ["WordPress / Elementor"],
    budget: "Don't Know",
    url: "https://mobaso.app/",
  },
  {
    img: "img/projects/project-5.jpg",
    name: "Highnoon",
    format: "img",
    project: "WEBSITE",
    client: "Company-Project",
    duration: "6 MONTHS",
    technologies: ["HTML, CSS, JAVASCRIPT, PHP"],
    budget: "Don't Know",
    url: "https://highnoon-labs.com/",
  },
  {
    img: "img/projects/project-6.jpg",
    name: "Virtual Office",
    format: "img",
    project: "WEBSITE",
    client: "Company-Project",
    duration: "3 MONTHS",
    technologies: ["WordPress, WP-Bakery"],
    budget: "Don't Know",
    url: "https://virtualofficeparramatta.com/",
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent design and coding projects. Want to see more? Email
              me.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <Image
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content mare">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie}</Fragment>
                      ))}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li>
                </ul>
                <a
                  rel="noopener"
                  target="_blank"
                  href={work?.url}
                  className="btn"
                >
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
