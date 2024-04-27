import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import RoleMode from "../RoleMode/RoleMode";

const NAV_TABS = [
  { name: "", title: "Početna" },
  { name: "volonteri", title: "Volonteri" },
  { name: "aktivnosti", title: "Aktivnosti" },
  { name: "udruge", title: "Udruge" },
];

// NavLink React Router  -> active class inspect

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.NavTabs}>
        {NAV_TABS.map((tab) => (
          <div key={tab.title} className={styles.Tab}>
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
      <RoleMode />
    </div>
  );
};

export default Navigation;
