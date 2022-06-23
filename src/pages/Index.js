import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
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

  const [listJobs, setListJobs] = useState([]);

  useEffect(() => {
    setListJobs(props.jobs)
  }, [])

  const oldToNew = () => {
    const sorted = [...listJobs].sort((a,b) => {
    return parseDate(a.DateApplied) - parseDate(b.DateApplied)
  })
  setListJobs(sorted);
  }

  const newToOld= () => {
    const sorted = [...listJobs].sort((a,b) => {
      return parseDate(b.DateApplied) - parseDate(a.DateApplied)
    })
    setListJobs(sorted)
  }

  const loaded = (jobs) => {
    return jobs.map((job) => (
      <div className="job-tile shadow p-3 mb-5 rounded">
        <div className="job-tile-heading">
          <div
            className="job-color shadow p-3 mb-5 rounded"
            style={{ backgroundColor: getColor(job) }}
          ></div>
          <img className="job-tile-logo" src={job.Logo}></img>
        </div>
        <ul>
          <li key={job._id} className="job ">
            <Link to={`/jobapplications/${job._id}`}>
              <div>
                <h5>{job.DateApplied}</h5>
                <h2>{job.Company}</h2>
                <h5>{job.PositionTitle}</h5>
                <h6>Contacted: {job.Contacted}</h6>
              </div>
            </Link>
            <a href={`mailto:${job.ContactInfo}?subject=${job.PositionTitle}`}>
              <button className="btn btn-outline-dark">Follow Up</button>
            </a>
          </li>
        </ul>
      </div>
    ));
  };

  const loading = () => {
    return <h2>Loading ...</h2>;
  };

  return (
    <>
    <h1>My Jobs</h1>
    <div className='sort'>
    <button className="btn btn-outline-dark" onClick={oldToNew}>Oldest to newest</button>
    <button className="btn btn-outline-dark" onClick={newToOld}>Newest to oldest</button>
    </div>
    <div className="index-jobs">
    {props.jobs ? loaded(listJobs) : loading()}
    </div>
    </>
  );
};

export default Index;
