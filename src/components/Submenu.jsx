import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../utils/context";

export default function Submenu() {
  const { isSubmenuOpen, location } = useGlobalContext();
  // useRef have been set-up to access the submenu "container".
  const container = useRef(null);
  // everytime the location value changes "useEffect" gonna run.
  useEffect(() => {
    // in useEffect this is where the conainer bc
    // the "inline CSS" will be added.
    const submenu = container.current;
    const { center, bottem } = location; // Destructuring!
    submenu.style.left = `${center}px`; // this gonna set it(the submenu when overing the mouse) up in the center
    submenu.style.top = `${bottem}px`; // vertically set up // (how many px from the top)
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      Submenu
    </aside>
  );
}
