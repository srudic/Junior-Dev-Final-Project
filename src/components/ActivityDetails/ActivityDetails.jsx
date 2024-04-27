import styles from "./ActivityDetails.module.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import { useContext } from "react";

import Button from "../UI/Button/Button";
import UserContext from "../../context/UserContext";

const ActivityDetails = ({
  name,
  date,
  association,
  location,
  participants,
}) => {
  const { isAdminMode } = useContext(UserContext);
  const handleOnClickDelete = () => {
    console.log("Delete");
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
      <div className={styles.left}>
        <p>
          <FaMapMarkerAlt color="#8B0000" size={20} />
          <span>{location}</span>
        </p>
        <p className={styles.participants}>Popis prijavljenih</p>
        {/* dodaj ako nema prijavljenih "Postani prvi prijavljeni ->" */}
        {participants && (
          <ul>
            {participants.map((participant, index) => (
              <li key={participant.id}>
                <span>
                  {index + 1}. {participant.name}
                </span>
                {isAdminMode && (
                  <Button
                    icon={<RiDeleteBin5Line size={20} color="#8B0000" />}
                    onClickButton={handleOnClickDelete}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ActivityDetails;
