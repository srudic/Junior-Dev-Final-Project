import { useState, useContext } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { FaCirclePlus } from "react-icons/fa6";
import ActivityForm from "../ActivityForm/ActivityForm";
import styles from "./Header.module.css";
import AssociaionForm from "../AssociationForm/AssociationForm";
import VolonteerForm from "../VolonteerForm/VolonteerForm";
import ApprovalMessage from "../ApprovalMessage/ApprovalMessage";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { sortArray } from "../../utils/arrayManipulation";
import UserContext from "../../context/UserContext";

const Header = ({ associationsFlag, activitiesFlag, volonteersFlag }) => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [sortType, setSortType] = useState("");
  const [isApprovalRequestSuccessful, setIsApprovalRequestSuccessful] =
    useState(false);
  const {
    setAssociationsList,
    associationsList,
    setActivitiesList,
    activitiesList,
    setVolonteersList,
    volonteersList,
  } = useContext(UserContext);

  const handleChange = (event) => {
    setSortType(event.target.value);

    if (associationsFlag)
      setAssociationsList(
        sortArray({
          array: associationsList,
          sortBy: event.target.value,
        })
      );
    else if (activitiesFlag) {
      setActivitiesList(
        sortArray({
          array: activitiesList,
          sortBy: event.target.value,
        })
      );
    } else {
      setVolonteersList(
        sortArray({
          array: volonteersList,
          sortBy: event.target.value,
        })
      );
    }
  };

  const handleOpenAddForm = () => {
    setIsAddFormOpen(true);
  };

  const closeModal = () => {
    setIsAddFormOpen(false);
    setIsApprovalRequestSuccessful(false);
  };

  const handleApprovalRequestSuccess = () => {
    setIsApprovalRequestSuccessful(true);
  };

  return (
    <div className={styles.headerContainer}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sortiraj</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sortType}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {activitiesFlag && (
            <MenuItem value={"creationdate-asc"}>Najnovije</MenuItem>
          )}
          {activitiesFlag && (
            <MenuItem value={"creationdate-desc"}>Najstarije</MenuItem>
          )}
          <MenuItem value={"city-asc"}>Gradovi a-z</MenuItem>
          <MenuItem value={"city-desc"}>Gradovi z-a</MenuItem>
        </Select>
      </FormControl>
      <Button
        title="DODAJ"
        titleColor="#00b300"
        icon={<FaCirclePlus size={20} color="#00b300" />}
        onClickButton={handleOpenAddForm}
      />
      {isAddFormOpen && (
        <Modal closeModal={closeModal} isOpen={isAddFormOpen}>
          {activitiesFlag && <ActivityForm closeModal={closeModal} />}
          {associationsFlag && !isApprovalRequestSuccessful && (
            <AssociaionForm
              handleApprovalRequestSuccess={handleApprovalRequestSuccess}
            />
          )}
          {volonteersFlag && <VolonteerForm closeModal={closeModal} />}
          {isApprovalRequestSuccessful && (
            <ApprovalMessage closeModal={closeModal} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Header;
