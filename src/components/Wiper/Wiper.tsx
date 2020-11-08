import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./Wiper.css";

export interface WiperProps {
    isRequestedToWipe: boolean;
    onWipeComplete: () => void;
}

const Wiper = ({isRequestedToWipe, onWipeComplete}: WiperProps) => {

    useEffect(()=> {
        if(!isRequestedToWipe){
            return;
        }
        const timeline = gsap.timeline();

        timeline.set("div.wipe", {height: "0%", top: "0%"})
        .to("div.wipe", {height: "100%" })
        .to("div.wipe", {height: "0%", top: "100%"})
        .then(() => onWipeComplete());
        
    }, [isRequestedToWipe, onWipeComplete])

    if(!isRequestedToWipe) {
        return<></>;
    }

    return<div className="wipe"></div>
}

export default Wiper;