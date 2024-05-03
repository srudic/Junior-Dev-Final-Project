import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { TiThMenu } from "react-icons/ti";

import RoleMode from "../RoleMode/RoleMode";

import styles from "./navigation.module.css";

const NAV_TABS = [
  { name: "", title: "Početna" },
  { name: "volonteri", title: "Volonteri" },
  { name: "aktivnosti", title: "Aktivnosti" },
  { name: "udruge", title: "Udruge" },
];

// NavLink React Router  -> active class inspect

const Navigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 810);
    };

    // Initial check
    handleResize();

    // Event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={styles.Navigation}>
        {isSmallScreen && (
          <div
            className={styles.HamburgerBar}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            style={{ transform: mobileNavOpen ? "rotate(90deg)" : "none" }}
          >
            <TiThMenu size={25} color="#0d47a1" />
          </div>
        )}
        <h2>
          Volonteer<span>Ko</span>
        </h2>
        {!isSmallScreen && (
          <div className={styles.NavTabs}>
            {NAV_TABS.map((tab) => (
              <div key={tab.title} className={styles.Tab}>
                <NavLink
                  to={`/${tab.name}`}
                  style={({ isActive }) => {
                    return {
                      // borderBottom: isActive ? "1px solid gray" : "",
                      backgroundColor: isActive ? "#0D47A1" : "white",
                      color: isActive ? "white" : "#0D47A1",
                      padding: "10px 15px",
                      borderRadius: "20px",
                      fontWeight: "bold",
                    };
                  }}
                >
                  {tab.title}
                </NavLink>
              </div>
            ))}
          </div>
        )}
        {!isSmallScreen && <RoleMode />}
      </div>
      {mobileNavOpen && (
        <div
          className={`${styles.mobileNav} ${mobileNavOpen && styles.active}`}
        >
          <RoleMode />
          {NAV_TABS.map((tab) => (
            <div key={tab.title} className={styles.Tab}>
              <NavLink
                to={`/${tab.name}`}
                style={({ isActive }) => {
                  return {
                    // backgroundColor: isActive ? "#0D47A1" : "white",
                    color: isActive ? "white" : "#0D47A1",
                    padding: "10px 15px",
                    // borderRadius: "20px",
                    fontWeight: "bold",
                  };
                }}
              >
                {tab.title}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
