import React from "react";
import { useState } from "react";

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

  //display form state
  const [hideEditForm, setHideEditForm] = useState(true);

  return (
    <div className="single-job shadow mb-5 rounded">
      <img
        src={job.Logo}
        className="show-logo shadow mb-4 rounded"
        alt={job.Company}
      />

      <h1>{job.Company}</h1>
      <h2>{job.PositionTitle}</h2>
      <h3>{job.Description}</h3>
      <p>Date Applied: {job.DateApplied}</p>
      <p>Salary: ${job.Salary}</p>
      <p>Contact Info: {job.ContactInfo}</p>
      <p>Contacted: {job.Contacted}</p>
      <div className="show-buttons">
        <a href={`mailto:${job.ContactInfo}?subject=${job.PositionTitle}`}>
          <button1 className="btn btn-outline-success">Follow Up</button1>
        </a>
        <div className="edit-delete-buttons">
          <button
            className="btn btn-outline-dark"
            onClick={() => setHideEditForm(false)}
          >
            Edit Job
          </button>

          <button
            id="delete"
            className="btn btn-outline-danger"
            onClick={() => handleRemoveJob(job._id)}
          >
            Delete Job
          </button>
        </div>
      </div>
      <div className={`editFormOn ${hideEditForm ? "editFormOff" : ""}`}>
        <form className="editForm" onSubmit={handleSubmit}>
          <fieldset className="company-info">
            <legend>Company Info</legend>
            <label for="company">Company</label>
            <input
              className="form-control"
              value={editForm.Company}
              onChange={handleChange}
              name="Company"
              type="text"
              id="company"
            />

            <label for="contact">Email</label>
            <input
              className="form-control"
              value={editForm.ContactInfo}
              onChange={handleChange}
              name="ContactInfo"
              type="text"
              id="contact"
            />
            <label for="logo">Logo Image URL</label>
            <input
              className="form-control"
              value={editForm.Logo}
              onChange={handleChange}
              name="Logo"
              type="text"
              id="logo"
            />
          </fieldset>
          <br/>
          <fieldset className="job-info">
            <legend>Job Info</legend>
            <label for="position">Position Title</label>
            <input
              className="form-control"
              value={editForm.PositionTitle}
              onChange={handleChange}
              name="PositionTitle"
              type="text"
              id="position"
            />
            <label for="date">Date Applied</label>
            <input
              className="form-control"
              value={editForm.DateApplied}
              onChange={handleChange}
              name="DateApplied"
              type="date"
              id="date"
            />
            <label for="description">Description</label>
            <input
              className="form-control"
              value={editForm.Description}
              onChange={handleChange}
              name="Description"
              type="text"
              id="description"
            />
            <label for="salary">Salary</label>
            <input
              className="form-control"
              value={editForm.Salary}
              onChange={handleChange}
              name="Salary"
              type="text"
              id="salary"
            />
            <label for="contacted">Contacted</label>
            <input
              className="form-control"
              value={editForm.Contacted}
              onChange={handleChange}
              name="Contacted"
              type="text"
              id="contacted"
            />
          </fieldset>

          <br />
          <input
            type="submit"
            value="Update Job"
            className="btn btn-outline-dark"
          />
        </form>
      </div>
    </div>
  );
};
export default Jobapp;
