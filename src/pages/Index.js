import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"

const Index = (props) => {

    const [ newForm, setNewForm ] = useState({

});

    const handleChange = (event) => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createJob(newForm);
    };

    

    return (
    <div>
        <h1>Index</h1>
    </div>
  )
}

export default Index