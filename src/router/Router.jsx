import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "../Header";
import Git from "../gitSearch/Git";
import Home from "../pages/Pokemon";
import Flags from "../pages/Flags";
import Login from "../Login/Login";
import PrincipalImg from "../imagenes-pixabay/components/PrincipalImg"
import Private from "../private/iIndex";

const Router = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Private />} />
        <Route path="/pokemon" element={<Home />} />
        <Route path="/banderas" element={<Flags />} />
        <Route path="/git" element={<Git />} />
        <Route path="/header" element={<Header />} />
        <Route path="/imagen" element={<PrincipalImg />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;