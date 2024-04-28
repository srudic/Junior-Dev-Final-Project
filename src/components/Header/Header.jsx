import { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { FaCirclePlus } from "react-icons/fa6";
import ActivityForm from "../ActivityForm/ActivityForm";
import styles from "./Header.module.css";
import AssociaionForm from "../AssociationForm/AssociationForm";
import VolonteerForm from "../VolonteerForm/VolonteerForm";

const Header = ({ associationsFlag, activitiesFlag, volonteersFlag }) => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [sortType, setSortType] = useState("");

  const handleChange = (event) => {
    setSortType(event.target.value);
  };
  const handleOpenAddForm = () => {
    setIsAddFormOpen(true);
  };

  const closeModal = () => {
    setIsAddFormOpen(false);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.FormGroup}>
        <select
          className={[styles.SelectField, styles.ScrollableDropdown].join(" ")}
          onClick={handleChange}
        >
          {activitiesFlag && (
            <>
              <option value={"date-asc"}>Najnovije</option>
              <option value={"date-desc"}>Najstarije</option>
            </>
          )}
          <option value={"city-asc"}>Gradovi a-z</option>
          <option value={"city-desc"}>Gradovi z-a</option>
        </select>
      </div>
      <Button
        title="DODAJ"
        titleColor="#00b300"
        icon={<FaCirclePlus size={20} color="#00b300" />}
        onClickButton={handleOpenAddForm}
      />
      {isAddFormOpen && (
        <Modal closeModal={closeModal} isOpen={isAddFormOpen}>
          {activitiesFlag && <ActivityForm />}
          {associationsFlag && <AssociaionForm />}
          {volonteersFlag && <VolonteerForm />}
        </Modal>
      )}
    </div>
  );
};

export default Header;
