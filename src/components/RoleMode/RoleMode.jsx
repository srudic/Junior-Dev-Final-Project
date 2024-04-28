import { useContext, useState } from "react";

import styles from "./RoleMode.module.css";

import { FaRegUser } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";

import { alpha, styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import UserContext from "../../context/UserContext";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: blue[900],
    "&:hover": {
      backgroundColor: alpha(blue[900], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: blue[900],
  },
}));

const RoleMode = () => {
  const { isAdminMode, setIsAdminMode } = useContext(UserContext);
  const handleChange = (event) => {
    setIsAdminMode(event.target.checked);
  };
  return (
    <div className={styles.ThemeModeContainer}>
      {/* <div className={styles.Icon}>
        <FaRegUser size={20} />
      </div> */}
      <PinkSwitch
        checked={isAdminMode}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <div className={styles.Icon}>
        <GrUserAdmin size={20} color={isAdminMode ? "#0d47a1" : "gray"} />
      </div>
    </div>
  );
};

export default RoleMode;
