import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

const Header = (props) => {
  return (
    <nav className="navbar navbar-brand shadow-sm p-1 mb-4">
    <Link to='/' className="navbar-brand">
        <img src="https://raw.githubusercontent.com/peterkimm/applied_frontend/a8b369575db2121f2d65a3df3ab6ddec3320d0d7/src/images/logo-no-text.png" height={40} alt="applied logo"/>    </Link>
    <Link to='/'>
        <div>Dashboard</div>
    </Link>
     <Link to='/jobapplications'>
        <div>My Jobs</div>
    </Link>
    <Link to='/create'>
        <div>New Job</div>
    </Link>
   
    <ul className="login">
        {
            props.user
            ? <li onClick={logout}>Logout</li>
            : <li onClick={login}>Login</li>
            
        }
    </ul>
    </nav>
  )
}

export default Header