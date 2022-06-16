// react core functionality (hooks)
import { useState, useEffect } from "react";

// page components
import Create from "../pages/Create";
import Index from "../pages/Index";
import Jobapp from "../pages/Jobapp";
import Dashboard from "../pages/Dashboard"
// component libraries
import { Route } from "react-router-dom";

const Main = () => {

    
  return (
    <main className="container">
   <Route exact path="/">
        <Dashboard />
    </Route>
   <Route path="/jobapplications">
        <Index />
    </Route>
    <Route path="/jobapplications/:id">
        <Jobapp />
    </Route>
    <Route path="/create">
        <Create />
    </Route>
    </main>
  )
}

export default Main