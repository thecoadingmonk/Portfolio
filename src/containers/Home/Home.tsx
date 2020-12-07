import React, { useEffect, useRef } from 'react';
import './Home.css';
import '../../App.css';
import gsap from 'gsap';
import useDarkModeToggle from '../../hooks/useDarkModeToggle';

export interface HomeProps {
  isMenuOpen: boolean;
  isMenuClicked: (arg0: boolean) => void;
}

const Home = ({ isMenuClicked, isMenuOpen }: HomeProps) => {
  const [isDarkMode, setIsDarkMode] = useDarkModeToggle();

  const burgerTopRef = useRef(null);
  const burgerBottomRef = useRef(null);
  const burgerMiddleRef = useRef(null);
  const toggleRef = useRef(null);
  const wipeRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(burgerTopRef.current, {
        rotation: 45,
        transformOrigin: '50% 50%',
        y: 8,
      });
      gsap.to(burgerBottomRef.current, {
        rotation: -45,
        transformOrigin: '50% 50%',
        y: -8,
      });
      gsap.to(burgerMiddleRef.current, {
        width: 0,
      });
    } else {
      gsap.to(burgerTopRef.current, { rotation: 0, y: 0 });
      gsap.to(burgerBottomRef.current, { rotation: 0, y: 0 });
      gsap.to(burgerMiddleRef.current, {
        width: 28,
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isDarkMode) {
      const bodyTag = document.querySelector('body');
      bodyTag?.classList.toggle('dark-mode');
    }
  }, []);

  const wipeScreen = () => {
    const timeline = gsap.timeline();
    const bodyTag = document.querySelector('body');

    if (isDarkMode) {
      timeline.to(toggleRef.current, { x: 43 });
    } else {
      timeline.to(toggleRef.current, { x: 19 });
    }
    setIsDarkMode(!isDarkMode);

    timeline
      .set(wipeRef.current, { height: '0%', top: '0%' })
      .to(wipeRef.current, { height: '100%' })
      .add(() => {
        bodyTag?.classList.toggle('dark-mode');
      })
      .to(wipeRef.current, { height: '0%', top: '100%' });
  };

  return (
    <section>
      <div className='header'>
        <img
          className='avatar'
          src={require('../../assets/profile_pic.jpg')}
        ></img>
        <div className='title'>
          <h1>
            <span>S</span>AMARTHA <span>H</span>EGDE
          </h1>
          <span className='designation'>Front-end developer @OSlash.</span>
        </div>
      </div>
      <a href='#' className='dark-mode-toggle' onClick={() => wipeScreen()}>
        <svg
          width='64'
          height='40'
          viewBox='0 0 64 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='8'
            y='9'
            width='46'
            height='22'
            rx='11'
            stroke='black'
            strokeWidth='2'
          />
          <circle cx='19' cy='20' r='6' fill='black' fillOpacity='0.5' />
          <g transform='translate(19, 20)' className='toggle' ref={toggleRef}>
            <circle cx='0' cy='0' r='6' fill='black' />
          </g>
          <circle cx='43' cy='20' r='6' fill='black' fillOpacity='0.5' />
        </svg>
      </a>
      <a href='#' className='menu-toggle' onClick={() => isMenuClicked(true)}>
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='6'
            y='10'
            width='28'
            height='4'
            fill='black'
            className='burger-top'
            ref={burgerTopRef}
          />
          <rect
            x='6'
            y='18'
            width='28'
            height='4'
            fill='black'
            className='burger-middle'
            ref={burgerMiddleRef}
          />
          <rect
            x='6'
            y='26'
            width='28'
            height='4'
            fill='black'
            className='burger-bottom'
            ref={burgerBottomRef}
          />
        </svg>
      </a>
      <div className='wipe' ref={wipeRef}></div>
    </section>
  );
};

export default Home;
