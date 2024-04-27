import styles from "./VolonteersList.module.css";
import { LuDot } from "react-icons/lu";

const Volonteer = ({ name, city, jobs }) => {
  return (
    <div className={styles.volonteerContainer}>
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
    </div>
  );
};

const VolonteersList = ({ data }) => {
  return (
    <div className={styles.volonteerList}>
      {data &&
        data.map((element) => (
          <Volonteer
            name={element.name}
            city={element.city}
            key={element.id}
            jobs={element.jobs}
          />
        ))}
    </div>
  );
};

export default VolonteersList;
