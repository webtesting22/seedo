import { useState, useRef, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import SEDORoutes from './SEDOComponents/Routes/Routes';
const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (event) => {
      if (cursor) {
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    const handleMouseOver = (event) => {
      if (
        cursor &&
        (event.target.tagName === "P" ||
          event.target.tagName === "H1" ||
          event.target.tagName === "H2" ||
          event.target.tagName === "A" ||
          event.target.tagName === "SPAN" ||
          event.target.tagName === "BUTTON")
      ) {
        cursor.classList.add("hover-blast");
        event.target.classList.add("text-blast"); // Add permanent blast effect to text
        setTimeout(() => {
          cursor.classList.remove("hover-blast");
        }, 1000000); // Reset cursor blast
      }
    };
    const handleMouseOut = (event) => {
      if (
        cursor &&
        (event.target.tagName === "P" ||
          event.target.tagName === "H1" ||
          event.target.tagName === "H2" ||
          event.target.tagName === "A" ||
          event.target.tagName === "BUTTON" ||
          event.target.tagName === "SPAN")
      ) {
        cursor.classList.remove("hover-blast");
        event.target.classList.remove("text-blast"); // Reset text visibility
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      // Cleanup
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

function App() {

  return (
    <>
      <Router>
        <CustomCursor />
        <SEDORoutes />
      </Router>
    </>
  )
}

export default App
