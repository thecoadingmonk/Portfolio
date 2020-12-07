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
          <a href="#">Projects</a>
        </div>
        <div className="external">
          <a href="#">Github</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </nav>
    </>
  );
};

export default Navigator;
