import { useContext, useState } from "react";

import { doc, deleteDoc } from "firebase/firestore";
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
  id,
}) => {
  const { isAdminMode, getAssociationsRequestList } = useContext(UserContext);
  const handleOnClickApprove = () => {
    console.log("Odobri");
  };

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
    await deleteDoc(doc(db, "approval-requests", element.id));
    getAssociationsRequestList();
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
            onClickButton={() => console.log("Approve")}
          />
        )}
        {isAdminMode && requestsFlag && (
          <>
            <Button
              title="ODOBRI"
              titleColor="rgb(29, 143, 29)"
              icon={<BsFillSendCheckFill size={20} color="rgb(29, 143, 29)" />}
              onClickButton={handleOnClickApprove}
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
            name={element.name}
            date={element.date}
            association={element.association}
            location={element.location}
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
    <>
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
    </>
  );
};
export default Cards;
