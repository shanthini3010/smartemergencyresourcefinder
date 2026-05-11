import { useState } from "react";
import "../App.css";
import axios from "axios";

function OrganDonation(){

const [name,setName] = useState("");
const [organ,setOrgan] = useState("");
const [phone,setPhone] = useState("");
const [location,setLocation] = useState("");

const submitDonor = () => {

axios.post("http://localhost:5000/organs",{

name: name,
organ: organ,
phone: phone,
location: location

})
.then(()=>{

alert("Organ donor registered successfully!");

/* clear form after saving */

setName("");
setOrgan("");
setPhone("");
setLocation("");

})
.catch((err)=>{

console.error(err);

});

};

return(

<div className="organ-container">

<h1 className="organ-title">
🫀 Organ Donation Registration
</h1>

<p className="organ-subtitle">
Become a hero. Donate an organ and save lives.
</p>

<div className="organ-card">

<input
className="organ-input"
placeholder="Donor Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<select
className="organ-input"
value={organ}
onChange={(e)=>setOrgan(e.target.value)}
>

<option value="">Select Organ</option>
<option value="Heart">🫀 Heart</option>
<option value="Lungs">🫁 Lungs</option>
<option value="Brain Tissue">🧠 Brain Tissue</option>
<option value="Kidney">🫘 Kidney</option>
<option value="Liver">🫀 Liver</option>
<option value="Cornea">👁 Cornea (Eyes)</option>

</select>

<input
className="organ-input"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<input
className="organ-input"
placeholder="Location"
value={location}
onChange={(e)=>setLocation(e.target.value)}
/>

<button
className="organ-button"
onClick={submitDonor}
>
Register Organ Donor
</button>

</div>

</div>

);

}

export default OrganDonation;