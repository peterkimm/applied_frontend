import React from 'react';

const Jobapp = (props) => {
  const id = props.match.params.id;
  const allJobs = props.jobs;
  const job = allJobs.find((job) => job._id === id);

  return (
    <div className="single-job">
      <div className='show-image'>
        <img src={job.Logo} className='show-logo'/>
      </div>
      <h1>{job.Company}</h1>
      <h2>{job.PositionTitle}</h2>
      <h3>{job.Description}</h3>

      <p>Date Applied: {job.DateApplied}</p>
      <p>Salary: ${job.Salary}</p>
      <p>Contact Info: {job.ContactInfo}</p>
      <p>Contacted: {job.Contacted}</p>
      <a href={`mailto:${job.ContactInfo}?subject=${job.PositionTitle}`}>
              <button>Follow Up</button>
            </a>
    </div>
  )
}

export default Jobapp