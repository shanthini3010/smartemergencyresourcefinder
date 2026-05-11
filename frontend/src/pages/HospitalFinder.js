import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function HospitalFinder(){

const navigate = useNavigate();
const query = new URLSearchParams(useLocation().search);
const type = query.get("type");

const [place,setPlace] = useState("Detecting location...");
const [hospitals,setHospitals] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{

const loadHospitals = async () => {

try{

navigator.geolocation.getCurrentPosition(async (position)=>{

const lat = position.coords.latitude;
const lon = position.coords.longitude;

/* Get location name */

try{

const placeRes = await fetch(
`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
);

const placeData = await placeRes.json();

setPlace(
placeData.address.city ||
placeData.address.town ||
placeData.address.village ||
placeData.address.suburb ||
"Your Area"
);

}catch{
setPlace("Your Location");
}

/* Try to get hospitals */

try{

const overpassQuery = `
[out:json];
node["amenity"="hospital"](around:5000,${lat},${lon});
out;
`;

const hospitalRes = await fetch(
"https://overpass-api.de/api/interpreter",
{
method:"POST",
body:overpassQuery
}
);

const hospitalData = await hospitalRes.json();

const hospitalList = hospitalData.elements.map(h=>({
name: h.tags.name || "Nearby Hospital"
}));

setHospitals(hospitalList.slice(0,6));

}catch{

/* fallback hospitals if API fails */

setHospitals([
{name:"Government Hospital"},
{name:"Apollo Hospital"},
{name:"KMCH Hospital"},
{name:"City Medical Center"},
{name:"Emergency Trauma Center"}
]);

}

setLoading(false);

});

}catch{

setPlace("Location unavailable");

setHospitals([
{name:"Government Hospital"},
{name:"Apollo Hospital"},
{name:"KMCH Hospital"},
{name:"City Medical Center"}
]);

setLoading(false);

}

};

loadHospitals();

},[type]);

return(

<div className="main-container">

<h1 className="main-title">Nearby Hospitals</h1>

<button className="back-btn" onClick={()=>navigate("/emergency")}>
⬅ Back
</button>

<p>📍 Location: <b>{place}</b></p>

{loading && <p>Searching hospitals near you...</p>}

<div className="grid-container">

{hospitals.map((h,i)=>(
<div key={i} className="card">

<h3>{h.name}</h3>

<p>Emergency services available</p>

<a href="tel:108">
<button>📞 Call Ambulance</button>
</a>

</div>
))}

</div>

</div>

);

}

export default HospitalFinder;