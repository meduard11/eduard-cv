import { NavBarItem } from "./NavBarItem";
import { scrollHandler } from "../utils /ScrollHandler";
import { useEffect, useState } from "react";

const BLUE = "#62B6CB";
const ORANGE = "#FFAD69";
const PURPLE = "#8F3985";
const RED = "#FF6A6A";

export const NavBar = () => {
  const [first_c, setFirst_c] = useState(false);
  const firstClick = () => {
    !first_c ? scrollHandler("idx-1") : console.log("Already clicked once");
    setFirst_c(true);
  };

  //Waiting for component to render before applying onclick otherwise not working
  useEffect(() => {
    document.getElementById("idx-1").onclick = firstClick;
  });

  return (
    <>
      <div className="flex bg-grr text-whit phonescreen justify-center">
        <div className="m-12 mx-6 text-5xl font-light text-center mb-6">
          Eduard Mihaila
        </div>
        <div className="lg:flex mx-auto lg:mr-12 md:mr-12 sm:mr-4 md:flex-wrap lg:mt-8 lg:mb-8 mb-4">
          <NavBarItem
            color={BLUE}
            desc="About me"
            onClick={() => scrollHandler("idx-1")
          }
            
          />
          <NavBarItem
            color={ORANGE}
            desc="Experiences"
            onClick={() => scrollHandler("idx-2")}
          />
          <NavBarItem
            color={PURPLE}
            desc="Formation"
            onClick={() => scrollHandler("idx-3")}
          />
          <NavBarItem
            color={RED}
            desc="Languages"
            onClick={() => scrollHandler("idx-4")}
          />
        </div>
      </div>
    </>
  );
};
