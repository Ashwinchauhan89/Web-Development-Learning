import { useEffect, useState } from "react";
// [<img>]

function App(){
   
   const [users,setUsers] = useState([]);
  //  const [name,setName] = useState("");
  const [count,setCount] = useState(30);

   
  useEffect(()=>{
     
    async function GithubProfile() {
       
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setUsers(data);
    console.log("Hello");
   }

   GithubProfile();

  },[count]) 

  // useEffect(()=>{
  //   console.log("Hello");
  // },[name])    
  
  // function handleChange(e){
  //   setName(e.target.value.toUpperCase());
  // }

  //[] dependency array is empty, it will run only once when the component mounts

  return (
    <>
    <h1>Github User</h1>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}></input>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap" , gap:"10px"}}>
      {
        users.map(user=>(
          <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login}/>
        ))
      }
    </div>
    </>
  )
}

export default App;