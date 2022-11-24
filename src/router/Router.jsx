import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "../Header";
import Git from "../gitSearch/Git";
import Home from "../pages/Pokemon";
import Flags from "../pages/Flags";
import Login from "../Login/Login";
import PrincipalImg from "../imagenes-pixabay/components/PrincipalImg";
import Private from "../private/Index";
import FlagDetail from "../Components/FlagDetail";
import HeaderLogin from "../Login/components/HeaderLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderLogin />
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Private />} />
        <Route path="/pokemon" element={<Home />} />
        <Route path="/banderas" element={<Flags />} />
        <Route path="/banderas/detail/:name" element={<FlagDetail />} />
        <Route path="/imagen" element={<PrincipalImg />} />
        <Route path="/login" element={<Login />} />

        <Route path="/git" element={<Git />} />

        {/* privates */}
        <Route element={<Private />}>
          <Route path="/header" element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
