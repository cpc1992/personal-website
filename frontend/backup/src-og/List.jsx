import "./List.css";

export default function List({ projects, setProjects }) {
  // this function will change the state of the project to reflect whether it is selected or not.
  function selectProject(index) {
    setProjects((currProjects) => {
      return currProjects.map((project) => {
        if (project.id == index) {
          // for the one we clicked
          if (project.state == 0 || project.state == 1) {
            // if we are either:
            // 1) closed with anchor right or
            // 2) closing with anchor right
            // => begin opening with anchor right
            return { ...project, state: 3 };
          } else if (project.state == 2 || project.state == 3) {
            // else if we are either:
            // 1) opened with anchor right
            // 2) opening with anchor right
            // => begin closing with anchor right
            return { ...project, state: 1 };
          } else {
            return { ...project };
          }
        } else {
          // for the ones that we didnt click - if we're open we need to move the anchor left, we will close it left later
          if (project.state == 3) {
            // if we are:
            // 1) opening with anchor right
            // => force opened with anchor left
            return { ...project, state: 4 };
          } else {
            return { ...project };
          }
        }
      });
    });

    // if the current project's anchor is on the left, close it to the left. skip if we don't need to close anything left.
    setTimeout(() => {
      setProjects((currProjects) => {
        return currProjects.map((project) => {
          if (project.state == 4) {
            // if we are:
            // 1) opened with anchor left
            // => begin closing with anchor left
            return { ...project, state: 5 };
          } else {
            return { ...project };
          }
        });
      });
    });

    // wait for animation to end and reset any anchors on the left to right to prep for next open
    setTimeout(() => {
      setProjects((currProjects) => {
        return currProjects.map((project) => {
          if (project.state == 5) {
            // if we are:
            // 1) closing with anchor left
            // => switch to closed with anchor right
            return { ...project, state: 0 };
          } else {
            return { ...project };
          }
        });
      });
    }, 300);
  }

  return (
    <div className="list-box">
      <h2 className="project-list-title">Projects</h2>
      <ul className="project-list-items">
        {projects.map((project) => {
          return (
            <li key={project.id} id={project.id}>
              <span onClick={() => selectProject(project.id)}>
                {project.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
