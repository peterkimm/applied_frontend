import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
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
              <div>
                <h2>{job.DateApplied}</h2>
                <h2>{job.Company}</h2>
                <h2>{job.PositionTitle}</h2>
                <h2>{job.Contacted}</h2>
                <button></button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    ));
  };

  const loading = () => {
    return <h2>Loading ...</h2>;
  };

  return <div className="index-jobs">{props.jobs ? loaded() : loading()}</div>;
};

export default Index;
