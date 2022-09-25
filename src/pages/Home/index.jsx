import React from 'react'
import {getStorage,ref,getDownloadURL} from "firebase/storage"
function Home() {
    const storage=getStorage();
    const storageRef=ref(storage,"restuarants/");

function getFirebaseRestaurant(){
    getDownloadURL(storageRef).then((url)=>{
     
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    console.log(url);
    }).catch((err)=>console.log(err))
}
getFirebaseRestaurant()



  return (
    <div style={{position:"reletive",width:"100%",height:"100vh",backgroundColor:"#F5F5F5"}}>
    
    <div style={{position:"absolute",width:"70vw",height:"60vh",backgroundColor:"white",top:"20vh"}}>
<h2>Restaurant Requests</h2>
    </div>
    </div>
  )
}

export default Home;