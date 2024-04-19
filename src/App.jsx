import { useState, createContext } from "react";

import data from "../data.json";

import JobCard from "./components/JobCard";
import FiltersContainer from "./components/FiltersContainer";

export const JobListingsContext = createContext();

const App = () => {
  const [jobsData, setJobsData] = useState(data);
  const [filters, setFilters] = useState([]);

  const filterData = (skills) => {
    let newData = data.filter((item) => {
      return skills.every((skill) => {
        return (
          item.languages.includes(skill) ||
          item.role === skill ||
          item.level === skill ||
          item.tools.includes(skill)
        );
      });
    });
    setJobsData(newData);
  };

  const removeSkills = (skill) => {
    const updatedFilters = filters.filter((item) => item !== skill);
    setFilters(updatedFilters);
    filterData(updatedFilters);
  };

  const addSkills = (skill) => {
    if (!filters.includes(skill)) {
      const updatedFilters = [...filters, skill];
      setFilters(updatedFilters);
      filterData(updatedFilters);
    }
  };

  return (
    <JobListingsContext.Provider
      value={{
        addSkills,
        filters,
        removeSkills,
      }}
    >
      <div>
        <header></header>
        <main className="main-container">
          <ul className="jobs-data-list">
            {jobsData.map((eachJob) => (
              <JobCard key={eachJob.id} details={eachJob} />
            ))}
          </ul>
        </main>
        {filters.length > 0 && <FiltersContainer />}
      </div>
    </JobListingsContext.Provider>
  );
};

export default App;
