import { Outlet, NavLink, useParams } from "react-router-dom";
import { planets } from "../data/planets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./planetL.css";

function PlanetLayout() {
  const { planet } = useParams(); // es exeba :planet-s pathsshi
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${planet}/overview`);
  }, []);
  return (
    <div className="center">
      <div className="grid">
        <Outlet context={[planet]} />
        <div className="innerLinks">
          <button className={planet}>
            <NavLink to="overview">
              <span className="n"> 01</span> OVERVIEW
            </NavLink>
          </button>
          <button className={planet}>
            <NavLink to="intstr">
              <span className="n">02</span>{" "}
              <span className="clear">Internal</span> Structire
            </NavLink>
          </button>
          <button className={planet}>
            <NavLink to="geology">
              <span className="n">03</span> SURFACE{" "}
              <span className="clear">GEOLOGY</span>
            </NavLink>
          </button>
        </div>
      </div>
      <div className="numinfo">
        <div className="box">
          <p>ROTATION TIME</p>
          <h2>{planets[planet].rotTime}</h2>
        </div>
        <div className="box">
          <p>REVOLUTION TIME</p>
          <h2>{planets[planet].revTime}</h2>
        </div>
        <div className="box">
          <p>radius</p>
          <h2>{planets[planet].radius}</h2>
        </div>
        <div className="box">
          <p>AVERAGE TEMP.</p>
          <h2>{planets[planet].avgTemp}</h2>
        </div>
      </div>
    </div>
  );
}

export default PlanetLayout;
