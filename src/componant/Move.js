import React, { useEffect, useRef, useState } from 'react';
import './Move.css';

const Move = (props) => {
  return (
    <div className="app">
      <GooeyCursor />
      <div className="page-wrap">
        <h1>{props.FName}<br />{props.SName}</h1>
      <div> <p className='the_name'>Mariam Mazzed</p> </div>

      </div>
    </div>
  );
};

const GooeyCursor = () => {
  const TAIL_LENGTH = 20;
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorHistory = useRef(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));
  const cursorCircles = useRef([]);

  useEffect(() => {
    // Initialize cursor circles
    const circles = [];
    for (let i = 0; i < TAIL_LENGTH; i++) {
      const div = document.createElement('div');
      div.classList.add('cursor-circle');
      cursorRef.current.appendChild(div);
      circles.push(div);
    }
    cursorCircles.current = circles;

    // Set up mouse move listener
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Start animation loop
    let animationFrameId;
    const updateCursor = () => {
      const history = cursorHistory.current;
      history.shift();
      history.push({ x: position.x, y: position.y });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const current = history[i];
        const next = history[i + 1] || history[TAIL_LENGTH - 1];
        
        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;
        
        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;
        
        if (cursorCircles.current[i]) {
          cursorCircles.current[i].style.transform = 
            `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;
        }
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      cursorCircles.current.forEach(circle => {
        if (circle.parentNode) {
          circle.parentNode.removeChild(circle);
        }
      });
    };
  }, [position]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="goo" version="1.1" width="100%">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
      <div id="cursor" ref={cursorRef}></div>
    </>
  );
};

export default Move;