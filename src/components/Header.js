import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";

const Header = (props) => {
  return (
    <nav className="navbar navbar-brand bg-light">
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