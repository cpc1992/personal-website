import { useState } from "react";

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
          <h2 className="welcome">Hello There</h2>
          <span>
            Hi my name is Clifford Chan. I'm a software developer living in the
            Bay Area. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div
          className={"text1 " + (noneSelected ? "left_visible" : "left_gone")}
        >
          <h2 className="welcome">Welcome</h2>
          <span>
            Hi my name is Clifford Chan. I'm a software developer living in the
            Bay Area. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className={
                "text1 " +
                (project.state == 0
                  ? "test0"
                  : project.state == 1
                  ? "test1"
                  : project.state == 2
                  ? "test2"
                  : project.state == 3
                  ? "test3"
                  : project.state == 4
                  ? "test4"
                  : "test5")
              }
            >
              <h2 className="project-title">{project.title}</h2>
              <span>{project.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
