import { useState } from "react";
import myprojects from "./myprojects.js";
import List from "./List.jsx";
import Details from "./Details.jsx";

export default function ContextBox() {
  const [projects, setProjects] = useState(myprojects);

  return (
    <div className="content-box">
      <Details projects={projects} />
      <List projects={projects} setProjects={setProjects} />
    </div>
  );
}
