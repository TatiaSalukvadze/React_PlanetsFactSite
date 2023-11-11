import { Outlet, NavLink, useParams } from "react-router-dom";
import { planets } from "../data/planets";
import "./planetL.css";

function PlanetLayout() {
  const { planet } = useParams(); // es exeba :planet-s pathsshi

  return (
    <div class="center">
      <div class="grid">
        <Outlet context={[planet]} />

        <div class="innerLinks">
          <button class={planet}>
            <NavLink to="overview">
              <span class="n"> 01</span> OVERVIEW
            </NavLink>
          </button>
          <button class={planet}>
            <NavLink to="intstr">
              <span class="n">02</span> <span class="clear">Internal</span>{" "}
              Structire
            </NavLink>
          </button>
          <button class={planet}>
            <NavLink to="geology">
              <span class="n">03</span> SURFACE{" "}
              <span class="clear">GEOLOGY</span>
            </NavLink>
          </button>
        </div>
      </div>
      <div class="numinfo">
        <div class="box">
          <p>ROTATION TIME</p>
          <h2>{planets[planet].rotTime}</h2>
        </div>
        <div class="box">
          <p>REVOLUTION TIME</p>
          <h2>{planets[planet].revTime}</h2>
        </div>
        <div class="box">
          <p>radius</p>
          <h2>{planets[planet].radius}</h2>
        </div>
        <div class="box">
          <p>AVERAGE TEMP.</p>
          <h2>{planets[planet].avgTemp}</h2>
        </div>
      </div>
    </div>
  );
}

export default PlanetLayout;
