import { Link } from "react-router-dom";
import { login, logout } from "../services/firebase";
import { IoClipboardOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";


const Header = (props) => {
  return (
    <IconContext.Provider value = {{ 
        color: "black", 
        size: "1.7em",
        className: "allIcons",
        
        


        }} >
    <nav className="navbar navbar-brand shadow-sm p-1 mb-4">
    <Link to='/' className="navbar-brand">

        <img src="https://raw.githubusercontent.com/peterkimm/applied_frontend/a8b369575db2121f2d65a3df3ab6ddec3320d0d7/src/images/logo-no-text.png" height={40} alt="applied logo"/>    </Link>
    <Link to='/' className="Link">
        <IoClipboardOutline className="icon"/>
        <div className="text dashIcon">Dashboard</div>

    </Link>
     <Link to='/jobapplications' className="Link">
         <IoApps className="icon"/>
        <div className="text">My Jobs</div>
    </Link>
    <Link to='/create' className="Link">
        <IoBagOutline className="icon"/>
        <div className="text">New Job</div>
    </Link>
   
    <ul className="login Link">
        <IoArrowForwardCircleOutline />
        {
            props.user 
            ? <li onClick={logout} className="text log">Logout</li>
            : <li onClick={login} className="text log">Login</li>
            
        }
    </ul>
    </nav>
    </IconContext.Provider>
  )
}

export default Header