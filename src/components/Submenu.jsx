import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../utils/context";

export default function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  // useRef have been set-up to access the submenu "container".
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  // everytime the location value changes "useEffect" gonna run.
  useEffect(() => {
    setColumns("col-2"); // by default!
    // this is (in useEffect) where to get the container bc
    // the "inline CSS" will be added.
    const submenu = container.current; // this gets the node !
    const { center, bottem } = location; // Destructuring!
    submenu.style.left = `${center}px`; // this gonna set it(the submenu when overing the mouse) up in the center
    submenu.style.top = `${bottem}px`; // vertically set up // (how many px from the top)

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]); // useEffect runs everytime the location/links value changes !

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
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
