import { scrollHandler } from "../utils /ScrollHandler";
import { useState } from "react";

export const Arrow = ({ index, color, dark }) => {
  const [hover, setHover] = useState(false);
  return (
    //p-12 so cursor doesn't need to be precise
    <div className="p-6" onClick={() => scrollHandler(index)}
    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

    <div
      className="arrow mx-auto" style={{
        borderTop: "1vmin solid " + (dark ? "white" : "black"),
        borderRight: "1vmin solid " + (dark ? "white" : "black"),
        borderColor : hover ? color : (dark ? "white" : "black"),
        boxShadow: (hover ? ( dark ? "0.5vmin -0.5vmin 0 white" : "0.5vmin -0.5vmin 0 black"): " "),
        color : dark ? "black" : "white"
        
    }}
    ></div>
    </div>
  );
};
