import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "../Header";
/* import Git from "../gitSearch/Git";
import Home from "../pages/pokemon";
import Flags from "../pages/Flags"; */
import Inputimg from "../imagenes-pixabay/components/Inputimg";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/banderas" element={<Flags/>}/>
        <Route path="/git" element={<Git />} />
        <Route path="/header" element={<Header />} />
        <Route path="/Image" element={<Inputimg />} />

      </Routes>
    </BrowserRouter>
  );
};
export default Router;
