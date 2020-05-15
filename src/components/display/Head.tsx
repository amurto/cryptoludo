import React, { useEffect } from "react";
import { animateCustomEase, flicker } from "../hooks/utils";
import "../style/Head.css";

const Head: React.FC = () => {
  useEffect(() => { 
    let element: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".animateMe");
    let animateFlickers: any[] = [];
    for (let i = 0; i < element.length; i++) {
      animateFlickers.push(
        animateCustomEase(4000, flicker, element[i], "opacity", 0, 1)
      );
    }
    animateFlickers.map((aF) => window.requestAnimationFrame(aF));

    const animate = () => {
      element.forEach(function (el) {
        el.style.opacity = "0";
      });
      let animateFlickers: any[] = [];
      for (let i = 0; i < element.length; i++) {
        animateFlickers.push(
          animateCustomEase(4000, flicker, element[i], "opacity", 0, 1)
        );
      }
      animateFlickers.map((aF) => window.requestAnimationFrame(aF));
    };
    document.querySelector(".sign")?.addEventListener("click", animate);
    return () => {
      document.querySelector(".sign")?.removeEventListener("click", animate);
    };
  }, []);

  return (
    <div className="sign">
      <span className="animateMe">C</span>
      <span className="animateMe">R</span>
      <span className="animateMe">Y</span>
      <span className="animateMe">P</span>
      <span className="animateMe">T</span>
      <span className="animateMe">O</span>
      <span className="animateMe">L</span>
      <span className="animateMe">U</span>
      <span className="animateMe">D</span>
      <span className="animateMe">O</span>
    </div>
  );
};

export default Head;
