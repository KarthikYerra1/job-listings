/* eslint-disable react/prop-types */
import { useContext } from "react";
import { JobListingsContext } from "../App";

const Skills = ({ name }) => {
  const { addSkills } = useContext(JobListingsContext);

  return (
    <div className="skill-name" onClick={() => addSkills(name)}>
      {name}
    </div>
  );
};

export default Skills;
