import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login({ setIsLoggedIn }) {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const loginUser = () => {

axios.post("http://localhost:5000/auth/login",{
email,
password
}).then(res=>{

if(res.data.message === "Login Successful"){
setIsLoggedIn(true);
}
else{
alert("Invalid Login");
}

});

};

return(

<div className="login-container">

<div className="login-card">

<h1>Smart Emergency Resource Finder</h1>

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={loginUser}>
Login
</button>

</div>

</div>

);

}

export default Login;