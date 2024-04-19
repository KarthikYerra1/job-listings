import { useContext } from "react";
import { JobListingsContext } from "../App";
import remove from "../../public/icon-remove.svg";

const FiltersContainer = () => {
  const { filters, removeSkills } = useContext(JobListingsContext);

  return (
    <div className="filters-container">
      {filters.map((each, index) => (
        <div
          className="filter-container"
          key={each + index + Math.floor(Math.random() * 10000)}
        >
          <p>{each}</p>
          <button onClick={() => removeSkills(each)}>
            <img width="14" height="14" src={remove} alt="remove-icon" />
          </button>
        </div>
      ))}
    </div>
  );
};
export default FiltersContainer;
