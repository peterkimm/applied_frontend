import React from 'react'
import { useState } from "react";

const Create = (props) => {
    const [ newForm, setNewForm ] = useState({
        DateApplied: '',
        PositionTitle: '',
        Company: '',
        Description: '',
        Salary: '',
        ContactInfo: '',
        Logo: '',
        Contacted: ''

});

    const handleChange = (event) => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createJobs(newForm);
        setNewForm({
            DateApplied: '',
            PositionTitle: '',
            Company: '',
            Description: '',
            Salary: '',
            ContactInfo: '',
            Logo: '',
            Contacted: ''
    
    })
    };
  return (
    <section>
        <h1>CREATE New Job</h1>
    {props.user &&
    <form onSubmit={handleSubmit}>
 <input 
           value={newForm.DateApplied} 
           onChange={handleChange} 
           name="DateApplied" 
           type="text" />
            <input 
           value={newForm.PositionTitle} 
           onChange={handleChange} 
           name="PositionTitle" 
           type="text" />
            <input 
           value={newForm.Company} 
           onChange={handleChange} 
           name="Company" 
           type="text" />
            <input 
           value={newForm.Description} 
           onChange={handleChange} 
           name="Description" 
           type="text" />
            <input 
           value={newForm.Salary} 
           onChange={handleChange} 
           name="Salary" 
           type="text" />
            <input 
           value={newForm.ContactInfo} 
           onChange={handleChange} 
           name="ContactInfo" 
           type="text" />
            <input 
           value={newForm.Logo} 
           onChange={handleChange} 
           name="Logo" 
           type="text" />
            <input 
           value={newForm.Contacted} 
           onChange={handleChange} 
           name="Contacted" 
           type="text" />
           <input 
            type="submit" 
            value="Add Job" />
    </form>
    }
    </section>
    
  )
}

export default Create;