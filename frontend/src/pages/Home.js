import { useNavigate } from "react-router-dom";
import "../App.css";

function Home(){

const navigate = useNavigate();

return(

<div className="main-container">

<h1 className="main-title">
🚑 Smart Emergency Resource Finder
</h1>

<p className="subtitle">
Find emergency services, blood donors, and nearby hospitals instantly.
</p>

<div className="grid-container">

<div className="card home-card"
onClick={()=>navigate("/blood")}>

<h2>🩸 Blood Donation</h2>

<p>
Register as a donor or request blood during emergencies.
</p>

<button>Open</button>

</div>


<div className="card home-card"
onClick={()=>navigate("/emergency")}>

<h2>🏥 Emergency Help</h2>

<p>
Find nearby hospitals based on accident or injury type.
</p>

<button>Find Hospitals</button>

</div>


<div className="card home-card">

<h2>📞 Emergency Call</h2>

<p>
Call ambulance services immediately during critical situations.
</p>

<a 
href="https://www.google.com/search?q=call+108+ambulance+india"
target="_blank"
rel="noopener noreferrer"
>
<button>📞 Call Ambulance (108)</button>
</a>

</div>

</div>

</div>

);

}

export default Home;