import styles from "./Cards.module.css";
import Modal from "../UI/Modal/Modal";
import { useContext, useState } from "react";

import ActivityDetails from "../ActivityDetails/ActivityDetails";
import Button from "../UI/Button/Button";

import { RiDeleteBin5Line } from "react-icons/ri";

import UserContext from "../../context/UserContext";

const Cards = ({ activities }) => {
  const { isAdminMode } = useContext(UserContext);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (activity) => {
    setSelectedActivity(activity);
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setIsOpen(false);
  };

  const handleOnClickDelete = () => {
    console.log("Delete");
  };

  return (
    <div>
      {activities.map((activity, index) => (
        <div
          key={index}
          className={styles.cardContainer}
          onClick={() => openModal(activity)}
        >
          <h2 className={styles.activityName}>{activity.name}</h2>
          {activity.date && (
            <p className={styles.dateTime}>Datum: {activity.date}</p>
          )}
          {isAdminMode && (
            <Button
              title="IZBRIŠI"
              titleColor="#8B0000"
              icon={<RiDeleteBin5Line size={20} color="#8B0000" />}
              onClickButton={handleOnClickDelete}
            />
          )}
        </div>
      ))}
      {selectedActivity && (
        <Modal closeModal={closeModal} isOpen={isOpen}>
          <ActivityDetails
            name={selectedActivity.name}
            date={selectedActivity.date}
            association={selectedActivity.association}
            location={selectedActivity.location}
            participants={selectedActivity.participants}
          />
        </Modal>
      )}
    </div>
  );
};

export default Cards;
