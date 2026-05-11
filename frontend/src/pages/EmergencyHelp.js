import { useNavigate } from "react-router-dom";
import "../App.css";

function EmergencyHelp(){

const navigate = useNavigate();

return(

<div className="main-container">

<h1 className="main-title">Select Emergency Type</h1>

<div className="grid-container">

<div className="card emergency-card"
onClick={()=>navigate("/hospital?type=accident")}>

<h2>🚗 Road Accident</h2>
<p>Find trauma centers and emergency hospitals nearby.</p>

</div>


<div className="card emergency-card"
onClick={()=>navigate("/hospital?type=burn")}>

<h2>🔥 Burn Injury</h2>
<p>Locate hospitals specialized in burn treatment.</p>

</div>


<div className="card emergency-card"
onClick={()=>navigate("/hospital?type=fracture")}>

<h2>🦴 Fracture</h2>
<p>Find orthopedic hospitals for bone injuries.</p>

</div>

</div>

</div>

);

}

export default EmergencyHelp;