import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../utils/context";

export default function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  // useRef have been set-up to access the submenu "container".
  const container = useRef(null);
  // everytime the location value changes "useEffect" gonna run.
  useEffect(() => {
    // this is (in useEffect) where to get the container bc
    // the "inline CSS" will be added.
    const submenu = container.current; // this gets the node !
    const { center, bottem } = location; // Destructuring!
    submenu.style.left = `${center}px`; // this gonna set it(the submenu when overing the mouse) up in the center
    submenu.style.top = `${bottem}px`; // vertically set up // (how many px from the top)
  }, [location]); // useEffect runs everytime the location changes !

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-2`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
