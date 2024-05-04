import { useContext, useState } from "react";

import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillSendCheckFill } from "react-icons/bs";

import ActivityDetails from "../../ActivityDetails/ActivityDetails";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import UserContext from "../../../context/UserContext";

import styles from "./Cards.module.css";

const Card = ({
  element,
  name,
  address,
  city,
  requestsFlag,
  date,
  activities,
}) => {
  const {
    isAdminMode,
    removeActivityFromListById,
    addNewAssociationToList,
    removeAssociationFromList,
    removeAssociationRequest,
  } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const openModal = (activity) => {
    setSelectedActivity(activity);
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setIsOpen(false);
  };

  const deleteApprovalRequest = async (element) => {
    try {
      await deleteDoc(doc(db, "approval-requests", element.id));
      removeAssociationRequest(element.id);
    } catch (err) {
      console.error(err);
    }
  };

  const approveRequest = async (element) => {
    try {
      const res = await addDoc(collection(db, "associations"), {
        name: element.name,
        address: element.address,
        city: element.city,
      });
      deleteApprovalRequest(element);
      addNewAssociationToList({
        id: res.id,
        name: element.name,
        address: element.address,
        city: element.city,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAssociation = async (element) => {
    try {
      await deleteDoc(doc(db, "associations", element.id));
      removeAssociationFromList(element.id);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteActivity = async (element) => {
    try {
      await deleteDoc(doc(db, "activities", element.id));
      removeActivityFromListById(element.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.card} onClick={() => openModal(element)}>
      <div className={styles.columnLeft}>
        <h2 className={styles.title}>{name}</h2>
        {address && city && (
          <p className={styles.subtitle}>
            {address}, {city}
          </p>
        )}
        {date && <p className={styles.subtitle}> Datum: {date} </p>}
      </div>
      <div className={styles.columnRight}>
        {isAdminMode && !requestsFlag && (
          <Button
            title="IZBRIŠI"
            titleColor="#8B0000"
            icon={<RiDeleteBin5Line size={20} color="#8B0000" />}
            onClickButton={
              activities
                ? () => deleteActivity(element)
                : () => deleteAssociation(element)
            }
          />
        )}
        {isAdminMode && requestsFlag && (
          <>
            <Button
              title="ODOBRI"
              titleColor="rgb(29, 143, 29)"
              icon={<BsFillSendCheckFill size={20} color="rgb(29, 143, 29)" />}
              onClickButton={() => approveRequest(element)}
            />
            <Button
              title="IZBRIŠI"
              titleColor="#8B0000"
              icon={<RiDeleteBin5Line size={20} color="#8B0000" />}
              onClickButton={() => deleteApprovalRequest(element)}
            />
          </>
        )}
      </div>
      {activities && selectedActivity && (
        <Modal closeModal={closeModal} isOpen={isOpen}>
          <ActivityDetails
            id={element.id}
            name={element.name}
            date={element.date}
            association={element.association}
            city={element.city}
            participants={element.participants}
            description={element.description}
          />
        </Modal>
      )}
    </div>
  );
};

const Cards = ({ data, requestsFlag, activities }) => {
  return (
    <div className={styles.cardsContainer}>
      {data &&
        data.map((element) => (
          <Card
            id={element.id}
            element={element}
            name={element.name}
            address={element.address}
            city={element.city}
            key={element.id}
            requestsFlag={requestsFlag}
            date={element.date}
            activities={activities}
          />
        ))}
    </div>
  );
};
export default Cards;
