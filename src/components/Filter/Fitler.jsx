import { useContext, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import Button from "../UI/Button/Button";
import MultipleSelectCheckmarks from "../UI/MultipleSelect";

import styles from "./Filter.module.css";
import UserContext from "../../context/UserContext";

const Filter = () => {
  const { tag, setTag } = useContext(UserContext);
  const handleChangeTag = (event) => {
    const {
      target: { value },
    } = event;
    setTag(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className={styles.filterContainer}>
      <MultipleSelectCheckmarks handleChangeTag={handleChangeTag} tag={tag} />
      {/* <div className={styles.buttons}>
        <Button
          title="PRETRAŽI"
          titleColor="rgb(29, 143, 29)"
          icon={<IoSearch color="rgb(29, 143, 29)" size={25} />}
        />
        <Button
          title="VRATI"
          titleColor="rgb(26, 66, 94)"
          icon={<IoMdRefresh color="rgb(26, 66, 94)" size={25} />}
        />
      </div> */}
    </div>
  );
};

export default Filter;
