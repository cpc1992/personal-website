import "./Details.css";
import parse from "html-react-parser";

export default function Details({ projects }) {
  let noneSelected = true;

  for (let proj of projects) {
    if (proj.state == 2 || proj.state == 3 || proj.state == 4) {
      noneSelected = false;
    }
  }

  return (
    <div className="details-box">
      <div className="details-holder">
        <div className="hidden">
          <h2 className="project-title">Unusual Options Flow</h2>
          <div className="project-outline">
            <p className="para-text">
              This app uses the Discord API to query unusual stock option
              purchases and also scrapes Yahoo finance earnings data. The data
              is then compared to show if the option purchases coincide with
              upcoming company earnings. The purchase data is listed in table
              format and is searchable by ticker.
              <br />
              Note: All API requests and scraping were turned off in June 2022.
            </p>
            <p className="para-text">
              The UI is built with React, and the backend is handled by a Python
              Flask server.
            </p>
            <div className="project-links">
              <a>Live Site</a>
              <a>Github</a>
            </div>
          </div>
        </div>

        <div
          className={
            "absolute-positioning " +
            (noneSelected ? "open-left-trans" : "closed-left-trans")
          }
        >
          <h2 className="welcome">Welcome.</h2>
          <div className="project-outline">
            <p className="para-text">
              Hi my name is Clifford Chan. I'm a full-stack software engineer
              living in the Bay Area. I have a keen interest in anything that
              has to do with data structures, algorithms, and full-stack
              development. I am the type of person who will spend hours writing
              a script that will save me 5 minutes a day. I love solving
              challenging problems, along with exploring and experimenting with
              new technologies.
            </p>
            <p className="para-text">
              When I'm not coding you can find me reading Brandon Sanderson
              books, eating hot pot, or running around Hyrule searching for
              Korok seeds!
            </p>
          </div>
        </div>
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className={
                "absolute-positioning " +
                (project.state == 0
                  ? "closed-right"
                  : project.state == 1
                  ? "closed-right-trans"
                  : project.state == 2
                  ? "open-right"
                  : project.state == 3
                  ? "open-right-trans"
                  : project.state == 4
                  ? "open-left"
                  : "closed-left-trans")
              }
            >
              <h2 className="project-title">{project.title}</h2>
              <div className="project-outline">
                <p className="para-text">{parse(project.description)}</p>
                <p className="para-text">{project.tooling}</p>
                <div className="project-links">
                  {project.links.map((project) => {
                    return (
                      <a
                        key={project[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project[1]}
                        className="project-link"
                      >
                        {project[0]}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
