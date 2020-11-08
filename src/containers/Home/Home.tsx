import React, { useEffect, useState } from "react";
import "./Home.css";
import "../../App.css";
import gsap from "gsap";
import useDarkMode from '../../hooks/useDarkMode';

export interface HomeProps {
  isMenuOpen: boolean;
  isMenuClicked: (arg0: boolean) => void;
}

const Home = ({ isMenuClicked, isMenuOpen }: HomeProps) => {
  const isDarkMode = useDarkMode();
  const [isLightMode, setIsLightMode] = useState(!isDarkMode);

  useEffect(() => {
    

    if (isMenuOpen) {
      gsap.to(".burger-top", {
        rotation: 45,
        transformOrigin: "50% 50%",
        y: 8,
      });
      gsap.to(".burger-bottom", {
        rotation: -45,
        transformOrigin: "50% 50%",
        y: -8,
      });
      gsap.to(".burger-middle", {
        width: 0,
      });
    } else {
      gsap.to(".burger-top", { rotation: 0, y: 0 });
      gsap.to(".burger-bottom", { rotation: 0, y: 0 });
      gsap.to(".burger-middle", {
        width: 28,
      });
    }
    
  }, [isMenuOpen]);

  useEffect(() => {

    if (isDarkMode) {
      gsap.to("g.toggle", { x: 43 });
    } else {
      gsap.to("g.toggle", { x: 19 });
    }

    wipeScreen();
  },[isDarkMode])

  const wipeScreen = () => {
    const timeline = gsap.timeline();
    const bodyTag = document.querySelector("body");
     
    if (isLightMode) {
      gsap.to("g.toggle", { x: 43 });
      setIsLightMode(false);

    } else {
      gsap.to("g.toggle", { x: 19 });
      setIsLightMode(true);
    }

      timeline.set("div.wipe", {height: "0%", top: "0%"})
      .to("div.wipe", {height: "100%" })
      .add(() => {
         bodyTag?.classList.toggle("dark-mode");
      })
      .to("div.wipe", {height: "0%", top: "100%"});
  }

  return (
    <section>
      <h1>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11.5146"
            y="5.30304"
            width="24"
            height="24"
            transform="rotate(15 11.5146 5.30304)"
            fill="#C4C4C4"
          />
        </svg>
        Samartha Hegde
      </h1>
      <a href="#" className="dark-mode-toggle" onClick={() => wipeScreen()}>
        <svg
          width="64"
          height="40"
          viewBox="0 0 64 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="9"
            width="46"
            height="22"
            rx="11"
            stroke="black"
            stroke-width="2"
          />
          <circle cx="19" cy="20" r="6" fill="black" fill-opacity="0.5" />
          <g transform="translate(19, 20)" className="toggle">
            <circle cx="0" cy="0" r="6" fill="black" />
          </g>
          <circle cx="43" cy="20" r="6" fill="black" fill-opacity="0.5" />
        </svg>
        <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
      </a>
      <a href="#" className="menu-toggle" onClick={() => isMenuClicked(true)}>
        <span> {isMenuOpen ? "Close" : "Menu"}</span>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="10"
            width="28"
            height="4"
            fill="black"
            className="burger-top"
          />
          <rect
            x="6"
            y="18"
            width="28"
            height="4"
            fill="black"
            className="burger-middle"
          />
          <rect
            x="6"
            y="26"
            width="28"
            height="4"
            fill="black"
            className="burger-bottom"
          />
        </svg>
      </a>
      <div className="wipe"></div>
    </section>
  );
};

export default Home;
