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
      <h2>
        Volonteer<span>Ko</span>
      </h2>
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
      <RoleMode />
    </div>
  );
};

export default Navigation;
