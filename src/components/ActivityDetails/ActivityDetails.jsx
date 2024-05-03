import styles from "./ActivityDetails.module.css";

import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase-config";

import { FaMapMarkerAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import { useContext } from "react";
import { useForm } from "react-hook-form";

import Button from "../UI/Button/Button";
import UserContext from "../../context/UserContext";

const ActivityDetails = ({
  id,
  name,
  date,
  association,
  city,
  participants,
  description,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isAdminMode, getActivitiesList, activitiesList } =
    useContext(UserContext);

  const handleOnClickDelete = async (participant) => {
    try {
      await updateDoc(doc(db, "activities", id), {
        participants: arrayRemove({
          name_surname: participant.name_surname,
          phone: participant.phone,
        }),
      });
      getActivitiesList();
    } catch (err) {
      console.error(err);
    }
  };

  // [{ name_surname: data.name_surname, phone: data.phone }]
  const onSubmit = async (data) => {
    try {
      await updateDoc(doc(db, "activities", id), {
        participants: arrayUnion({
          name_surname: data.name_surname,
          phone: data.phone,
        }),
      });
      getActivitiesList();
    } catch (err) {
      console.error(err);
    }
  };
  //TODO
  //prikaz lokacije
  //prijava na aktivnost
  //Na stranici/prozoru sa detaljnim opisom aktivnosti, potrebno je dozvoliti korisnicima prijavu na aktivnost.
  //Implementirajte polja za unos imena i prezimena volontera te ih odmah dodajte na popis.

  // ADMIN ->  brisanje pojedinih korisnika iz popisa prijava te brisanje čitavog događaja
  // Po želji možete implementirati i mogućnost uređivanja postojećih podataka (samo u ulozi admina)
  return (
    <div className={styles.detailsContainer}>
      <h3>{name}</h3>
      <p className={styles.date}>{date}</p>
      <p className={styles.association}>{association}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.left}>
        <p>
          <FaMapMarkerAlt color="#8B0000" size={20} />
          <span>{city}</span>
        </p>
      </div>
      <div className={styles.participantsContainer}>
        <div className={styles.participantsList}>
          <p className={styles.participants}>Popis prijavljenih</p>
          {/* dodaj ako nema prijavljenih "Postani prvi prijavljeni ->" */}
          {participants && (
            <ul>
              {participants.map((participant, index) => (
                <li key={participant.id}>
                  <span>
                    {index + 1}. {participant.name_surname}
                  </span>
                  {isAdminMode && (
                    <Button
                      icon={<RiDeleteBin5Line size={20} color="#8B0000" />}
                      onClickButton={() => handleOnClickDelete(participant)}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.FormContainer}
          >
            <div className={styles.FormGroup}>
              <label className={styles.Label}>Ime i prezime</label>
              <input
                type="text"
                {...register("name_surname", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                })}
                className={styles.InputField}
              />
              {errors.title && (
                <span className={styles.ErrorMessage}>
                  Ime i prezime je obavezno.
                </span>
              )}
            </div>
            <div className={styles.FormGroupRow}>
              <div className={styles.FormGroup}>
                <label className={styles.Label}>Kontakt</label>
                <input
                  type="tel"
                  placeholder="0999999999"
                  {...register("phone", {
                    required: true,
                    minLength: 8,
                    maxLength: 14,
                  })}
                  className={styles.InputField}
                />
                {errors.date && (
                  <span className={styles.ErrorMessage}>
                    Kontakt je obavezan.
                  </span>
                )}
              </div>
            </div>
            <Button
              type="submit"
              title="Potvrdi"
              titleColor="rgb(29, 143, 29)"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
