import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const legend = () => {
    return (
      <>
        <div className="legend-tile">
          <div
            className="legend-color shadow rounded"
            style={{ backgroundColor: "crimson" }}
          ></div>
          <p>Applied more than 14 days ago</p>
        </div>
      </>
    );
  };

  const parseDate = (date) => {
    let ymd = date.split("-");
    return new Date(ymd[0], ymd[1] - 1, ymd[2]);
  };

  const dateDiff = (first, second) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  };

  const getColor = (job) => {
    let color;
    let second = new Date();
    let first = parseDate(job.DateApplied);
    let diff = dateDiff(first, second);
    if (diff < 8) {
      color = "green";
    } else if (diff >= 8 && diff < 14) {
      color = "gold";
    } else {
      color = "crimson";
    }
    return color;
  };

  const redJobs = () => {
    let allRedJobs = [];
    props.jobs.map((job) => {
      if (getColor(job) === "crimson") allRedJobs.push(job);
    });
    return allRedJobs;
  };

  const loaded = () => {
    let allRedJobs = redJobs();
    return allRedJobs.map((job) => (
      <div className="job-tile shadow p-3 rounded">
        <div
          className="job-color shadow p-3 rounded"
          style={{ backgroundColor: getColor(job) }}
        ></div>
        <div className="job-tile-heading">
          <img className="job-tile-logo" src={job.Logo} alt={job.Company}></img>
        </div>
        <div className="tile-info">
          <ul>
            <li key={job._id} className="job">
              <Link to={`/jobapplications/${job._id}`}>
                <h5>{job.DateApplied}</h5>
                <h2>{job.Company}</h2>
                <h5>{job.PositionTitle}</h5>
                <h6>Contacted: {job.Contacted}</h6>
              </Link>
              <a
                href={`mailto:${job.ContactInfo}?subject=${job.PositionTitle}`}
              >
                <button className="btn btn-outline-dark follow-up">Follow Up</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <div className="dashboard">
      <div className="profile">
        {props.user ? (
          <>
            <img
              className="profileImage"
              src={props.user.photoURL}
              alt={props.user.displayName}
            />
           <br/>
            <h2>Welcome, {props.user.displayName}</h2>
          </>
        ) : (
          <h2>Login to see your jobs!</h2>
        )}
      </div>

      {props.jobs && loaded().length ? (
        <>
          <div className="legend-dash">{legend()}</div>
          <div className="dashboard-jobs">{loaded()}</div>
        </>
      ) : (
        <div className="dash-message">
          <p>Job applied more than 2 weeks ago will appear here!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
