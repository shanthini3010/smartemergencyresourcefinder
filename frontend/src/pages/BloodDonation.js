import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function BloodDonation(){

const [donorName,setDonorName] = useState("");
const [donorBlood,setDonorBlood] = useState("");
const [donorPhone,setDonorPhone] = useState("");
const [donorLocation,setDonorLocation] = useState("");
const [donorHospital,setDonorHospital] = useState("");

const [patientName,setPatientName] = useState("");
const [patientBlood,setPatientBlood] = useState("");
const [hospital,setHospital] = useState("");
const [patientPhone,setPatientPhone] = useState("");
const [patientLocation,setPatientLocation] = useState("");
const [requests,setRequests] = useState([]);

/* Register Blood Donor */
useEffect(()=>{

axios.get("http://localhost:5000/patients")
.then(res=>{
setRequests(res.data);
})
.catch(err=>{
console.error(err);
});

},[]);

const registerDonor = () => {

if(!donorName || !donorBlood || !donorPhone || !donorLocation){
alert("Please fill all fields");
return;
}

axios.post("http://localhost:5000/donors",{
name: donorName,
bloodGroup: donorBlood,
hospital: donorHospital,
phone: donorPhone,
location: donorLocation
})
.then(()=>{

alert("Donor Registered Successfully");

/* clear donor form */

setDonorName("");
setDonorBlood("");
setDonorPhone("");
setDonorLocation("");
setDonorHospital("");

})
.catch(err=>{
console.error(err);
});

};


/* Register Blood Request */

const registerPatient = () => {

if(!patientName || !patientBlood || !hospital || !patientPhone || !patientLocation){
alert("Please fill all fields");
return;
}

axios.post("http://localhost:5000/patients",{
name: patientName,
bloodGroup: patientBlood,
hospital: hospital,
phone: patientPhone,
location: patientLocation
})
.then(()=>{

alert("Blood Request Submitted");

/* clear patient form */

setPatientName("");
setPatientBlood("");
setHospital("");
setPatientPhone("");
setPatientLocation("");

})
.catch(err=>{
console.error(err);
});

};


return(

<div className="main-container">

<h1 className="main-title">
Blood Donation Services
</h1>

<div className="grid-container">

{/* Donor Registration */}

<div className="card">

<h2>Register as Donor</h2>

<input
value={donorName}
placeholder="Name"
onChange={(e)=>setDonorName(e.target.value)}
/>

<select
value={donorBlood}
onChange={(e)=>setDonorBlood(e.target.value)}
>

<option value="">Select Blood Group</option>

<optgroup label="Positive">
<option value="A+">A+</option>
<option value="B+">B+</option>
<option value="AB+">AB+</option>
<option value="O+">O+</option>
</optgroup>

<optgroup label="Negative">
<option value="A-">A-</option>
<option value="B-">B-</option>
<option value="AB-">AB-</option>
<option value="O-">O-</option>
</optgroup>

</select>

<input
value={donorPhone}
placeholder="Phone"
onChange={(e)=>setDonorPhone(e.target.value)}
/>

<input
value={donorHospital}
placeholder="Hospital"
onChange={(e)=>setDonorHospital(e.target.value)}
/>

<input
value={donorLocation}
placeholder="Location"
onChange={(e)=>setDonorLocation(e.target.value)}
/>

<button onClick={registerDonor}>
Register Donor
</button>

</div>


{/* Blood Request */}

<div className="card">

<h2>Request Blood</h2>

<input
value={patientName}
placeholder="Patient Name"
onChange={(e)=>setPatientName(e.target.value)}
/>

<select
value={patientBlood}
onChange={(e)=>setPatientBlood(e.target.value)}
>

<option value="">Blood Group Needed</option>

<optgroup label="Positive">
<option value="A+">A+</option>
<option value="B+">B+</option>
<option value="AB+">AB+</option>
<option value="O+">O+</option>
</optgroup>

<optgroup label="Negative">
<option value="A-">A-</option>
<option value="B-">B-</option>
<option value="AB-">AB-</option>
<option value="O-">O-</option>
</optgroup>

</select>

<input
value={hospital}
placeholder="Hospital"
onChange={(e)=>setHospital(e.target.value)}
/>

<input
value={patientPhone}
placeholder="Phone"
onChange={(e)=>setPatientPhone(e.target.value)}
/>

<input
value={patientLocation}
placeholder="Location"
onChange={(e)=>setPatientLocation(e.target.value)}
/>

<button onClick={registerPatient}>
Request Blood
</button>

</div>

</div>

</div>

);

}

export default BloodDonation;