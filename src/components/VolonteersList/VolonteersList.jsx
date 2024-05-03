import { useContext, useState } from "react";
import { db } from "../../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import multiavatar from "@multiavatar/multiavatar/esm";

import Button from "../UI/Button/Button";
import UserContext from "../../context/UserContext";
import VolonteerForm from "../VolonteerForm/VolonteerForm";
import Modal from "../UI/Modal/Modal";

import { LuDot } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

import styles from "./VolonteersList.module.css";

const Volonteer = ({ name, city, jobs, id, data }) => {
  let avatarSVG = multiavatar(name);
  const { isAdminMode, getVolonteersList } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  const deleteVolonteer = async (id) => {
    try {
      await deleteDoc(doc(db, "volonteers", id));
      getVolonteersList();
    } catch (err) {
      console.error(err);
    }
  };

  const editVolunteeer = async () => {
    try {
    } catch (err) {}
  };

  const handleEditModalOpen = () => {
    setIsEditing(true);
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.volonteerContainer}>
      <div
        dangerouslySetInnerHTML={{ __html: avatarSVG }}
        style={{ width: "50px", height: "50px" }}
      ></div>
      <div className={styles.title}>
        <h3 className={styles.name}>{name}</h3>
        <span>{city}</span>
      </div>

      {jobs && (
        <div className={styles.jobs}>
          {jobs.map((job) => (
            <p key={job.id}>
              <LuDot color="rgb(26, 66, 94)" />
              {job.name}
            </p>
          ))}
        </div>
      )}
      {isAdminMode && (
        <div className={styles.adminButtons}>
          <Button
            icon={<MdEdit size={20} color="rgb(29, 143, 29)" />}
            onClickButton={() => handleEditModalOpen()}
          />
          <Button
            icon={<RiDeleteBin5Line size={20} color="#8B0000" />}
            onClickButton={() => deleteVolonteer(id)}
          />
        </div>
      )}
      {isEditing && (
        <Modal closeModal={closeModal} isOpen={isEditing}>
          <VolonteerForm closeModal={closeModal} edit={data} />
        </Modal>
      )}
    </div>
  );
};

const VolonteersList = ({ data }) => {
  return (
    <div className={styles.volonteerList}>
      {data &&
        data.map((element) => (
          <Volonteer
            data={element}
            name={element.name_surname}
            city={element.city}
            key={element.id}
            jobs={element.activity_types}
            id={element.id}
          />
        ))}
    </div>
  );
};

export default VolonteersList;
