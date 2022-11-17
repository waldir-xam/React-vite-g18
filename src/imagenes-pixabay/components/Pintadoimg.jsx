import { getApi } from "../helpers/consumoApi";
import { Imgitems } from "../components/Imgitems";
import { useState, useEffect } from "react";

const PintadoImg = ({ valor }) => {
  const [infoApi, setInfoApi] = useState([]);
  useEffect(() => {
    getApi(valor).then((newImages) => setInfoApi(newImages.hits));
  }, [valor]);
  return (<div>
    {
        infoApi
    }
  </div>);
};
