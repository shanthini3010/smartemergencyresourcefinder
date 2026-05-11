import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({setIsLoggedIn}){

return(

<div className="navbar">

<h2 className="logo">🚑 Emergency Finder</h2>

<div className="nav-links">

<Link to="/">Home</Link>

<Link to="/blood">Blood Donation</Link>

<Link to="/organ">Organ Donation</Link>

<Link to="/emergency">Emergency Help</Link>

<button className="logout-btn"
onClick={()=>setIsLoggedIn(false)}>
Logout
</button>

</div>

</div>

);

}

export default Navbar;