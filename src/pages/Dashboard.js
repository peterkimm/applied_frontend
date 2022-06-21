import { Link } from "react-router-dom";

const Dashboard = (props) => {

  const colorFunction = () => {
   
  }

  const loaded = () => {
    return props.jobs.map((job) => (
      <div className="job-tile">

        <div className="job-tile-heading">
        <div className="job-color"></div>
        <img className="job-tile-logo" src={job.Logo}></img>
        </div>

        <ul>
          <li key={job._id} className="job">
            <Link to={`/jobapplications/${job._id}`}>
              <h4>Date Applied: {job.DateApplied}</h4>
              <h3>{job.Company}</h3>
              <p>{job.PositionTitle}</p>
              <p>Contacted: {job.Contacted}</p>
            </Link>
            <a href={`mailto:${job.ContactInfo}?subject=${job.PositionTitle}`}>
              <button>Follow Up</button>
            </a>
          </li>
        </ul>
      </div>
    ));
  };
  return (
    <div className="dashboard">

      <div className="profile">
        {props.user ? (
          <>
            <h2>Welcome, {props.user.displayName}</h2>
            <img src={props.user.photoURL} alt={props.user.displayName} />
          </>
        ) : (
          <h2>Login to see your jobs!</h2>
        )}
      </div>

          <div className="dashboard-jobs">
              {props.jobs && loaded()}
              </div>
    </div>
  );
};

export default Dashboard;
