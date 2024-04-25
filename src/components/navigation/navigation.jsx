import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const NAV_TABS = [
  { name: "", title: "Početna" },
  { name: "volonteri", title: "Volonteri" },
  { name: "aktivnosti", title: "Aktivnosti" },
  { name: "udruge", title: "Udruge" },
];

// NavLink React Router  -> active class inspect

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className={styles.Navigation}>
      {NAV_TABS.map((tab) => (
        <div
          key={tab.title}
          className={styles.Tab}
          onClick={() => setActiveTab(tab.name)}
        >
          <NavLink
            to={`/${tab.name}`}
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "1px solid gray" : "",
              };
            }}
          >
            {tab.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
