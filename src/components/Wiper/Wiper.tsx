import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Wiper.css";

export interface WiperProps {
  isRequestedToWipe: boolean;
  onWipeComplete: () => void;
}

const Wiper = ({ isRequestedToWipe, onWipeComplete }: WiperProps) => {
  const wipeRef = useRef(null);

  useEffect(() => {
    if (!isRequestedToWipe) {
      return;
    }
    const timeline = gsap.timeline();

    timeline
      .set(wipeRef.current, { height: "0%", top: "0%" })
      .to(wipeRef.current, { height: "100%" })
      .to(wipeRef.current, { height: "0%", top: "100%" })
      .then(() => onWipeComplete());
  }, [isRequestedToWipe, onWipeComplete]);

  if (!isRequestedToWipe) {
    return <></>;
  }

  return <div className="wipe" ref={wipeRef}></div>;
};

export default Wiper;
