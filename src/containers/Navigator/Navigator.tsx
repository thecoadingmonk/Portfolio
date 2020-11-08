import React from "react";
import "./Navigator.css";

export interface NavigatorProps {
  isOpen: boolean;
}

const Navigator = ({ isOpen }: NavigatorProps) => {
  return (
    <>
      <nav className={`${isOpen ? "fake-back" : "fake-back-close"}`}></nav>
      <nav className={`${isOpen ? "fake-mid" : "fake-mid-close"}`}></nav>
      <nav className={`${isOpen ? "nav-open" : ""}`}>
        <div className="internal">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Investments</a>
        </div>
        <div className="external">
          <a href="#">Instagram</a>
          <a href="#">Crunchbase</a>
          <a href="#">Twitter</a>
        </div>
      </nav>
    </>
  );
};

export default Navigator;
