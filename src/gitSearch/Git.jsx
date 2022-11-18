import { useState } from "react";
import {Link} from 'react-router-dom';
import './Git.css'



const Git=()=>{

    const [search,setSearch]= useState("");
    const[user,setUser]=useState({}); 

    //funcion fetch
    const fecthUser = async()=>{
     try{    const response = await fetch (`https://api.github.com/users/${search}`)
        const data = await response.json();
          setUser(data)
     }catch(error){
         console-log("error"),error.message
     }
  }
  // es lo que se muestra en el navegador 
    return(
        <div className="App-git">
            <div className="container" >
                <h1>Buscador Github</h1>
               <Link to="/">inicio</Link>
                <div className="grid">
                    <input type="text" placeholder="ingresa usuarios"onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div className="letra">
                    <button className="btn" onClick={fecthUser}>Buscar</button>
                </div>
                <article>
                    <div>
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt="" />
                        <h4>{user.login}</h4>
                        <p>{user.bio}</p>
                        <h3>{user.company}</h3>
                    </div>
                </article>
            </div>
        </div>



    )

}

export default Git;