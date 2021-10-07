import React, { useState } from "react";

const Profile = () =>{
    const [name,setname] = useState();
    console.log(name)
    const fetchData= async(nam) =>{
     const res= await fetch(`https://api.github.com/users/${nam}`).then((res)=>res.json())
     localStorage.setItem(name,JSON.stringify(res))
     console.log(res); 
    }
return(
<div>
    <input type="text"  placeholder="Enter gitUser Name.." onChange={(e)=>{
        setname(e.target.value)
    }}/>
    <button type="button" onClick={fetchData(name)}>Submit</button>
    <img src=""alt="GitUser"/>
    <h3>Company</h3>
    <h3>Location</h3>
    <h3>Followers</h3>
    <h3>Following</h3>
 </div>
)
}

export default Profile