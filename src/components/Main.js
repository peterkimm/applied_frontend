// react core functionality (hooks)
import { useState, useEffect } from "react";

// page components
import Create from "../pages/Create";
import Index from "../pages/Index";
import Jobapp from "../pages/Jobapp";
import Dashboard from "../pages/Dashboard"
// component libraries
import { Route } from "react-router-dom";

const Main = (props) => {

const [ jobs, setJobs ] = useState(null);

const URL = 'http://localhost:4000/jobapplications/';

const getJobs = async () => {
    if(!props.user) return;
    const token = await props.user.getIdToken();
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    setJobs(data);
}
// CREATE
const createJobs = async (job) => {
    if(!props.user) return;
    const token = await props.user.getIdToken();
    await fetch (URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(job)
    });
    getJobs();
};

useEffect(()=> {
    if (props.user){
        getJobs();
    } else {
        setJobs(null);
    }
    // getJob();
}, [props.user]);



  return (
    <main className="container">
   <Route exact path="/">
        <Dashboard user={props.user}/>
    </Route>
   <Route path="/jobapplications">
        <Index jobs={jobs} user={props.user}/>
    </Route>
    <Route path="/jobapplications/:id">
        <Jobapp />
    </Route>
    <Route path="/create">
        <Create createJobs={createJobs} user={props.user} jobs={jobs} />
    </Route>
    </main>
  )
}

export default Main