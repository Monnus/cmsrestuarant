import React,{useState} from 'react'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import app from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const RegAndLog = () => {
  const navigate=useNavigate();
  const [regORsign,setRegORSign]=useState(1);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const auth=getAuth(app);
const handleSubmit=(regORsign)=>{
if(regORsign===1){
createUserWithEmailAndPassword(auth,email,password).then((res)=>{
  setEmail("");
  setPassword("");
  setRegORSign(2);
  console.log(res,"you have seccessfully an account");
}).catch((error)=>{
  setEmail("");
  setPassword("");
  setRegORSign(2);
  console.log(error)})

}else if(regORsign===2){
  setEmail("");
  setPassword("");
  navigate("/Home")
signInWithEmailAndPassword(auth,email,password).then((res)=>{
  console.log("you have seccsessfully sign in");
}).catch((error)=>console.log(error))
}
}
const registerJSX=()=>{
  if(regORsign===1){
    return(
      <>
<h1>Admin Registration</h1>
<br/>
      <form action="" method="post">
      <label>Email</label>
        <br/>
        <input placeholder="Email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br/>
        <label>Password</label>
        <br/>
        <input placeholder='Password' type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <br/>
      <button type='button' onClick={()=>handleSubmit(1)}>Submit</button>
      </form>
      <h2 onClick={()=>setRegORSign(2)}>Go to Admin Login </h2>
      </>
    
    )
  }else if(regORsign===2){
    return(
<>
<h1>Admin Login</h1>
<br/>
      <form action="" method="post">
      <label>Email</label>
        <br/>
        <input placeholder="Email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br/>
        <label>Password</label>
        <br/>
        <input placeholder='Password' type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <br/>
      <button type='submit' onClick={()=>handleSubmit(2)}>Submit</button>
      <h2 onClick={()=>setRegORSign(1)}>Go to Admin Registration </h2>

      </form>
</>
    
    )
  }
}

  return (
    <div style={{position:"relative",width:"100%",height:"100vh",backgroundColor:"greenyellow"}}>

<div style={{position:"absolute",top:"20vh",left:'30vw',width:"500px",height:"400px",backgroundColor:"skyblue"}}>
{regORsign==1?registerJSX():registerJSX()}
</div>
    </div>
  )
}

export default RegAndLog