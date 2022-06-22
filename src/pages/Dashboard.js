import { Link } from "react-router-dom";

const Dashboard = (props) => {
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
    if (diff < 7) {
      color = "green";
    } else if (diff > 7 && diff < 14) {
      color = "yellow";
    } else {
      color = "red";
    }
    return color;
  };

  const loaded = () => {
    return props.jobs.map((job) => (
      <div className="job-tile shadow p-3 mb-5 rounded">
        <div className="job-tile-heading">
          <div
            className="job-color shadow p-3 mb-5 rounded"
            style={{ backgroundColor: getColor(job) }}
          ></div>
          <img className="job-tile-logo" src={job.Logo}></img>
        </div>
        <div className="tile-info">
          <ul>
            <li key={job._id} className="job">
              <Link to={`/jobapplications/${job._id}`}>
                <h3>{job.Company}</h3>
                <h4>Date Applied: {job.DateApplied}</h4>
                <p>{job.PositionTitle}</p>
                <p>Contacted: {job.Contacted}</p>
              </Link>
              <a
                href={`mailto:${job.ContactInfo}?subject=${job.PositionTitle}`}
              >
                <button class="btn btn-outline-dark">Follow Up</button>
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
            <h2>Welcome, {props.user.displayName}</h2>
            <img className='profileImage' src={props.user.photoURL} alt={props.user.displayName} />
          </>
        ) : (
          <h2>Login to see your jobs!</h2>
        )}
      </div>

      <div className="dashboard-jobs">{props.jobs && loaded()}</div>
    </div>
  );
};

export default Dashboard;
