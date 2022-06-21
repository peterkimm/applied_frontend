// react core functionality (hooks)
import { useState, useEffect } from "react";

// page components
import Create from "../pages/Create";
import Index from "../pages/Index";
import Jobapp from "../pages/Jobapp";
import Dashboard from "../pages/Dashboard";

// component libraries
import { Route } from "react-router-dom";

const Main = (props) => {
  const [jobs, setJobs] = useState(null);

  const URL = "http://localhost:4000/jobapplications/";
  // const URL = 'https://applied-b.herokuapp.com/';

  const getJobs = async () => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    setJobs(data);
  };

  // CREATE
  const createJobs = async (job) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(job),
    });
    getJobs();
  };

  //UPDATE
  const updateJobs = async (updatedJob, id) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    // matching up URL with backend
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(updatedJob),
    });
    getJobs();
  };

  // DELETE
  const deleteJobs = async (id) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    getJobs();
  };

  useEffect(() => {
    if (props.user) {
      getJobs();
    } else {
      setJobs(null);
    }
  }, [props.user]);

  return (
    <main className="container">
      <Route exact path="/">
        <Dashboard user={props.user} jobs={jobs} />
      </Route>
      <Route exact path="/jobapplications">
        <Index jobs={jobs} user={props.user} />
      </Route>
      <Route
        path="/jobapplications/:id"
        render={(rp) => (
          <Jobapp
            {...rp}
            jobs={jobs}
            updateJobs={updateJobs}
            deleteJobs={deleteJobs}
          />
        )}
      />

      <Route path="/create">
        <Create createJobs={createJobs} user={props.user} jobs={jobs} />
      </Route>
    </main>
  );
};

export default Main;
