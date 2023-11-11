import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./rootL.css";
import hamb from "../images/icon-hamburger.svg";
import ar from "../images/icon-chevron.svg";

export default function RootLayout() {
  const navigate = useNavigate();
  const navs = useRef(null);

  function togMenu() {
    if (navs.current.classList.contains("hide")) {
      navs.current.classList.remove("hide");
      navs.current.classList.add("show");
    } else {
      navs.current.classList.remove("show");
      navs.current.classList.add("hide");
    }
  }

  useEffect(() => {
    navigate(`/mercury`);
  }, []);
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>The Planets</h1>
          <img src={hamb} onClick={() => togMenu()} alt="" />
          <span ref={navs} class="hide">
            <NavLink to="mercury" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#DEF4FC" }}></div>
              MERCURY
              <img src={ar} alt="" class="arrow" />
            </NavLink>
            <NavLink to="venus" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#F7CC7F" }}></div>
              VENUS
              <img src={ar} alt="" class="arrow" />
            </NavLink>
            <NavLink to="earth" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#545BFE" }}></div>
              EARTH
              <img src={ar} alt="" class="arrow" />
            </NavLink>
            <NavLink to="mars" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#FF6A45" }}></div>
              MARS
              <img src={ar} alt="" class="arrow" />
            </NavLink>
            <NavLink to="jupiter" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#ECAD7A" }}></div>
              JUPITER
              <img src={ar} alt="" class="arrow" />
            </NavLink>
            <NavLink to="saturn" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#FCCB6B" }}></div>
              SATURN
              <img src={ar} alt="" class="arrow" />
            </NavLink>
            <NavLink to="uranus" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#65F0D5" }}></div>
              URANUS
              <img src={ar} alt="" class="arrow" />
            </NavLink>
            <NavLink to="neptune" onClick={() => togMenu()}>
              <div class="circle" style={{ backgroundColor: "#497EFA" }}></div>
              NEPTUNE
              <img src={ar} alt="" class="arrow" />
            </NavLink>
          </span>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
