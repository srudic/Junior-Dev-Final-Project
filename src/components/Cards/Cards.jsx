import styles from "./Cards.module.css";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";
import ActivityDetails from "../ActivityDetails/ActivityDetails";

const Cards = ({ activities }) => {
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
