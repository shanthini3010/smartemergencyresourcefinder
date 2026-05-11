import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./pages/Home";
import BloodDonation from "./pages/BloodDonation";
import EmergencyHelp from "./pages/EmergencyHelp";
import HospitalFinder from "./pages/HospitalFinder";
import OrganDonation from "./pages/OrganDonation";
import Navbar from "./components/Navbar";

function App(){

const [isLoggedIn,setIsLoggedIn] = useState(false);

/* Show login page first */

if(!isLoggedIn){
return <Login setIsLoggedIn={setIsLoggedIn} />;
}

return(

<Router>

<Navbar setIsLoggedIn={setIsLoggedIn}/>

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/blood" element={<BloodDonation/>} />

<Route path="/organ" element={<OrganDonation/>} />

<Route path="/emergency" element={<EmergencyHelp/>} />

<Route path="/hospital" element={<HospitalFinder/>} />

</Routes>

</Router>

);

}

export default App;