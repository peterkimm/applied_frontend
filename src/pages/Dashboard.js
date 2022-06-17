const Dashboard = (props) => {
  return (
    <div>
        <h1>Dashboard</h1>
        <div className="profile">
        { props.user 
        ? ( <>
          <h2>Welcome, {props.user.displayName}</h2>
          <img src={props.user.photoURL} alt={props.user.displayName} />
          
        </>)
        : <h2>Login to see your jobs!</h2>
        }
        </div>
        

    </div>
    
  )
}

export default Dashboard