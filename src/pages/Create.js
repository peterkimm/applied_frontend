import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Create = (props) => {
  const [newForm, setNewForm] = useState({
    DateApplied: "",
    PositionTitle: "",
    Company: "",
    Description: "",
    Salary: "",
    ContactInfo: "",
    Logo: "",
    Contacted: "",
  });

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createJobs(newForm);
    setNewForm({
      DateApplied: "",
      PositionTitle: "",
      Company: "",
      Description: "",
      Salary: "",
      ContactInfo: "",
      Logo: "",
      Contacted: "",
    });
    // props.history.push("/");
  };
  return (
    <section>
      <h1>Create New Job</h1>
      {props.user && (
        <div className="newJob">
          <form onSubmit={handleSubmit}>
            <fieldset className="company-info">
              <legend>Company Info</legend>
              <label for="company">Company</label>
              <input
                value={newForm.Company}
                onChange={handleChange}
                name="Company"
                type="text"
                id="company"
              />
              <label for="contact">Email</label>
              <input
                value={newForm.ContactInfo}
                onChange={handleChange}
                name="ContactInfo"
                type="text"
                id="contact"
              />
              <label for="logo">Logo Image URL</label>
              <input
                value={newForm.Logo}
                onChange={handleChange}
                name="Logo"
                type="text"
                id="logo"
              />
            </fieldset>
            <fieldset className="job-info">
              <legend>Job Info</legend>
              <label for="position">Position Title</label>
              <input
                value={newForm.PositionTitle}
                onChange={handleChange}
                name="PositionTitle"
                type="text"
                id="position"
              />
              <label for="date">Date Applied</label>
              <input
                value={newForm.DateApplied}
                onChange={handleChange}
                name="DateApplied"
                type="date"
                id="date"
              />
              <label for="description">Description</label>
              <input
                value={newForm.Description}
                onChange={handleChange}
                name="Description"
                type="text"
                id="description"
              />
              <label for="salary">Salary</label>
              <input
                value={newForm.Salary}
                onChange={handleChange}
                name="Salary"
                type="text"
                id="salary"
              />
              <label for="contacted">Contacted</label>
              <input
                value={newForm.Contacted}
                onChange={handleChange}
                name="Contacted"
                type="text"
                id="contacted"
              />
              <br />
              <input type="submit" value="Add Job" />
            </fieldset>
          </form>
        </div>
      )}
    </section>
  );
};

export default Create;
