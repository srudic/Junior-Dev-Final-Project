import { useState } from "react";
import styles from "./Cards.module.css";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import ActivityDetails from "../../ActivityDetails/ActivityDetails";
import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillSendCheckFill } from "react-icons/bs";
import UserContext from "../../../context/UserContext";

const Card = ({
  element,
  name,
  address,
  city,
  requestsFlag,
  date,
  activities,
}) => {
  const { isAdminMode } = useContext(UserContext);
  const handleOnClickDelete = () => {
    console.log("Delete");
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
            onClickButton={handleOnClickDelete}
          />
        )}
        {isAdminMode && requestsFlag && (
          <>
            <Button
              title="ODOBRI"
              titleColor="rgb(29, 143, 29)"
              icon={<BsFillSendCheckFill size={20} color="rgb(29, 143, 29)" />}
              onClickButton={handleOnClickDelete}
            />
            <Button
              title="IZBRIŠI"
              titleColor="#8B0000"
              icon={<RiDeleteBin5Line size={20} color="#8B0000" />}
              onClickButton={handleOnClickDelete}
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
