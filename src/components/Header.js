import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
    <Link to='/'>
        <div>Dashboard</div>
    </Link>
    <Link to='/create'>
        <div>Create new job applications</div>
    </Link>
    <Link to='/jobapplications'>
        <div>Job applications</div>
    </Link>
    <Link to='/jobapplications/:id'>
        <div>Show Page</div>
    </Link>
    </nav>
  )
}

export default Header