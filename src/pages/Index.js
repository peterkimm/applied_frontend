import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"

const Index = (props) => {


    const loaded = () => {
            return props.jobs.map(job => (
                <ul>
                <li key={job._id} className="job">
                    <Link to={`/jobapplications/${job._id}`}>
                        <div>
                        <h2>{job.DateApplied}</h2>
                        <h2>{job.PositionTitle}</h2>
                        <h2>{job.Company}</h2>
                        <h2>{job.Description}</h2>
                        <h2>{job.Salary}</h2>
                        <h2>{job.ContactInfo}</h2>
                        <h2>{job.Logo}</h2>
                        <h2>{job.Contacted}</h2>
                        <button></button>
                        </div>
                    </Link>
                </li>
                </ul>
            ));
    }

    const loading = () => {
        return <h2>Loading ...</h2>
    }

    return (
        <div>
        { props.jobs ? <ol style={{textAlign: "left"}}>{loaded()}</ol> : loading() }
        </div>
  )
}

export default Index