/* eslint-disable react/prop-types */
import Skills from "./Skills";

const JobCard = ({ details }) => {
  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = details;

  const featuredClassName = featured ? "featured-card" : null;
  return (
    <li className={`list-item ${featuredClassName}`}>
      <div className="profile-img-container">
        <img src={logo} width="88" height="88" alt={company + " logo"} />
      </div>
      <div className="job-data-container">
        <div className="job-title-container">
          <p className="company-name">{company}</p>
          <div className="new-or-featured">
            {details.new && <p className="new">NEW!</p>}
            {featured && <p className="featured">FEATURED</p>}
          </div>
        </div>
        <h3>{position}</h3>
        <div className="job-type-container">
          <p>{postedAt}</p>
          <p>{`·${" "}${contract}`}</p>
          <p>{`·${" "}${location}`}</p>
        </div>
      </div>
      <hr className="line" />
      <div className="skills">
        <Skills key="role" name={role} />
        <Skills key="level" name={level} />
        {languages.map((each) => (
          <Skills key={each + id} name={each} />
        ))}
        {tools.map((each) => (
          <Skills key={each + id} name={each} />
        ))}
      </div>
    </li>
  );
};

export default JobCard;
