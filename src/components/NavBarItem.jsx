import { useState } from "react";

export const NavBarItem = ({ desc, onClick, color }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="my-auto h-auto mx-4 flex w-1/4 text-light text-center"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="btn"
        style={{
            borderRadius : "10px",
          border:  "1px solid" + color,
          background: hover ? color : "",
        }}
      >
        <span className="noselect">{desc}</span>
      </div>
    </div>
  );
};
