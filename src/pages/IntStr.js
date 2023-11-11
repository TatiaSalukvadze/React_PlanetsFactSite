import React from "react";
import { useOutletContext } from "react-router-dom";
import { planets } from "../data/planets";

export default function IntStr() {
  const [planet] = useOutletContext();
  return (
    <>
      <div class="forOutl">
        <img src={planets[planet].intImg} />
      </div>
      <div class="words">
        <h1>{planets[planet].name}</h1>
        <p>{planets[planet].textInt}</p>
      </div>
    </>
  );
}
