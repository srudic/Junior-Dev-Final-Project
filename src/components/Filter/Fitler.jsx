import { useContext, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { IoMdRefreshCircle } from "react-icons/io";

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
      <Button icon={<IoMdRefreshCircle color="blue" size={25} />} />
      <MultipleSelectCheckmarks handleChangeTag={handleChangeTag} tag={tag} />
      <Button
        title="FILTRIRAJ"
        titleColor="blue"
        icon={<FaFilter color="blue" />}
      />
    </div>
  );
};

export default Filter;
