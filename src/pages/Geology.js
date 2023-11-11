import React from "react";
import { useOutletContext } from "react-router-dom";
import { planets } from "../data/planets";
import "../layouts/planetL.css";
import myImage from "../images/geology-neptune.png";

export default function Geology() {
  const [planet] = useOutletContext();

  return (
    <>
      <div class="forOutl">
        <div class="geoldiv">
          <img src={planets[planet].ovImg} />
          <img class="geol" src={planets[planet].geoImg} />
        </div>
      </div>

      <div class="words">
        <h1>{planets[planet].name}</h1>
        <p>{planets[planet].textOv}</p>
      </div>
    </>
  );
}
