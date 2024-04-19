import { useContext } from "react";
import { JobListingsContext } from "../App";

const FiltersContainer = () => {
  const { filters, removeSkills } = useContext(JobListingsContext);

  return (
    <div className="filters-container">
      {filters.map((each, index) => (
        <div className="filter-container" key={each + index + Math.floor(Math.random() * 10000)}>
          <p>{each}</p>
          <button onClick={() => removeSkills(each)}>
            <img
              width="14"
              height="14"
              src="/icon-remove.svg"
              alt="remove-icon"
            />
          </button>
        </div>
      ))}
    </div>
  );
};
export default FiltersContainer;
