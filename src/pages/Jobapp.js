import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Jobapp = (props) => {

  const id = props.match.params.id;
  const allJobs = props.jobs;
  const job = allJobs.find((job) => job._id === id);

  // state for form
  const [editForm, setEditForm] = useState(job);

  // Handle change for form
  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateJobs(editForm, job._id);
    props.history.push("/");

    const {
      DateApplied,
      PositionTitle,
      Company,
      Description,
      Salary,
      ContactInfo,
      Logo,
      Contacted,
    } = editForm;
    props.updateJobs(
      {
        DateApplied,
        PositionTitle,
        Company,
        Description,
        Salary,
        ContactInfo,
        Logo,
        Contacted,
      },
      job._id
    );
  };

  // Remove Job
  const handleRemoveJob = (id) => {
    props.deleteJobs(id);
    props.history.push("/");
  };

  return (
    <div className="single-job">
      <div className="show-image">
        <img src={job.Logo} className="show-logo" />
      </div>
      <h1>{job.Company}</h1>
      <h2>{job.PositionTitle}</h2>
      <h3>{job.Description}</h3>
      <p>Date Applied: {job.DateApplied}</p>
      <p>Salary: ${job.Salary}</p>
      <p>Contact Info: {job.ContactInfo}</p>
      <p>Contacted: {job.Contacted}</p>
      <button id="delete" onClick={() => handleRemoveJob(job._id)}>
        Delete Job
      </button>
      <form onSubmit={handleSubmit}>
        <label for="company">Company</label>
        <input
          value={editForm.Company}
          onChange={handleChange}
          name="Company"
          type="text"
          id="company"
        />
        <label for="contact">Email</label>
        <input
          value={editForm.ContactInfo}
          onChange={handleChange}
          name="ContactInfo"
          type="text"
          id="contact"
        />
        <label for="logo">Logo Image URL</label>
        <input
          value={editForm.Logo}
          onChange={handleChange}
          name="Logo"
          type="text"
          id="logo"
        />
        <label for="position">Position Title</label>
        <input
          value={editForm.PositionTitle}
          onChange={handleChange}
          name="PositionTitle"
          type="text"
          id="position"
        />
        <label for="date">Date Applied</label>
        <input
          value={editForm.DateApplied}
          onChange={handleChange}
          name="DateApplied"
          type="text"
          id="date"
        />
        <label for="description">Description</label>
        <input
          value={editForm.Description}
          onChange={handleChange}
          name="Description"
          type="text"
          id="description"
        />
        <label for="salary">Salary</label>
        <input
          value={editForm.Salary}
          onChange={handleChange}
          name="Salary"
          type="text"
          id="salary"
        />
        <label for="contacted">Contacted</label>
        <input
          value={editForm.Contacted}
          onChange={handleChange}
          name="Contacted"
          type="text"
          id="contacted"
        />
        <input type="submit" value="Update Job" />
      </form>

      <button>Follow Up</button>
      <a href={`mailto:${job.ContactInfo}?subject=${job.PositionTitle}`}></a>
    </div>
  );
};
export default Jobapp;
