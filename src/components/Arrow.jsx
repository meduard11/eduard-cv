import arrow from "../images/arrow.svg";
import { scrollHandler } from "../utils /ScrollHandler";
import { useState } from "react";

export const Arrow = ({ index, color, dark }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="arrow mx-auto"
      onClick={() => scrollHandler(index)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderColor : hover ? color : (dark ? "white" : "black"),
        boxShadow: (hover ? ( dark ? "0.5vmin -0.5vmin 0 white" : "0.5vmin -0.5vmin 0 black"): " "),
        color : dark ? "black" : "white",
        borderTop: "1vmin solid " + (dark ? "white" : "black"),
        borderRight: "1vmin solid " + (dark ? "white" : "black")
    }}
    ></div>
  );
};
