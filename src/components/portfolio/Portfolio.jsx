import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19525324-Orion-UI-kit-for-Figma",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts Templates & Infographics In Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19314633-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma Dashboard UI Kit For Data Design Web Apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19314636-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining Tasks And Tracking Progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19314346-Node-system-dashboard",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts Templates & Infographics In Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19314483-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts Templates & Infographics In Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19314483-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
