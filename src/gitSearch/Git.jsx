import { useState } from "react";
import "./Git.css";

const Git = () => {
  const [search, setSearch] = useState("");

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.log("Error"), err.message;
    }
  };
  return (
    <div className="App">
      <div className="container">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height={50}></img>
        <h1>Github Searcher</h1>
        <div className="grid">
          <input
            type="text"
            placeholder="ingresa usuarios"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && fetchUser()}
          />
        </div>
        <div className="letra">
          <button className="btn" onClick={fetchUser}>
            Buscar
          </button>
        </div>
        <article className="article">
          <div>
            <img src={user.avatar_url} alt="" />
            <h4>Nombre: {user.name}</h4>
            <h4>nickname: {user.login}</h4>
            <p>Biografia: {user.bio}</p>
            <p>Company: {user.company}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Git;
