import "./Details.css";

export default function Details({ projects, toggler, toggle }) {
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
          <h2 className="welcome">Welcome.</h2>
          <p className="para-text">
            Hi my name is Clifford Chan. I'm a full stack software developer
            living in the Bay Area. I am passionate about solving problems. I am
            the type of person who will spend hours writing a script that will
            save me 5 minutes a day. I love learning new technologies and
            expanding my skillset.
            <br />
            <br />
            When I'm not coding you can find me...
          </p>
        </div>

        <div
          className={
            "absolute-positioning " +
            (noneSelected ? "open-left-trans" : "closed-left-trans")
          }
        >
          <h2 className="welcome">Welcome.</h2>
          <p className="para-text">
            Hi my name is Clifford Chan. I'm a full stack software developer
            living in the Bay Area. I am passionate about solving problems. I am
            the type of person who will spend hours writing a script that will
            save me 5 minutes a day. I love learning new technologies and
            expanding my skillset.
            <br />
            <br />
            When I'm not coding you can find me...
          </p>
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
              <p className="para-text">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
