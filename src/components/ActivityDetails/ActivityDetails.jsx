import styles from "./ActivityDetails.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const ActivityDetails = ({
  name,
  date,
  association,
  location,
  participants,
}) => {
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
        <ul>
          {participants.map((participant, index) => (
            <li key={participant.id}>
              {index + 1}. {participant.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityDetails;
