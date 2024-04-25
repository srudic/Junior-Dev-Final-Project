import styles from "./Cards.module.css";

const Cards = ({ activities }) => {
  return (
    <div>
      {activities.map((activity) => (
        <div className={styles.cardContainer}>
          <h2 className={styles.activityName}>{activity.name}</h2>
          <p className={styles.dateTime}>Date/Time: {activity.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
