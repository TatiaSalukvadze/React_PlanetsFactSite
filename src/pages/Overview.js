import React from "react";
import { useOutletContext } from "react-router-dom";
import { planets } from "../data/planets";
import "../layouts/planetL.css";

export default function Overview() {
  const [planet] = useOutletContext();
  return (
    <>
      <div class="forOutl">
        <img src={planets[planet].ovImg} />
      </div>

      <div class="words">
        <h1>{planets[planet].name}</h1>
        <p>{planets[planet].textOv}</p>
      </div>
    </>
  );
}
