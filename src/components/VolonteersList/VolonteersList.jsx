import styles from "./VolonteersList.module.css";
import { LuDot } from "react-icons/lu";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Button from "../UI/Button/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import multiavatar from "@multiavatar/multiavatar/esm";

const Volonteer = ({ name, city, jobs }) => {
  let avatarSVG = multiavatar(name);
  const { isAdminMode } = useContext(UserContext);

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
          <Button icon={<MdEdit size={20} color="rgb(29, 143, 29)" />} />
          <Button icon={<RiDeleteBin5Line size={20} color="#8B0000" />} />
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
            name={element.name_surname}
            city={element.city}
            key={element.id}
            jobs={element.activity_types}
          />
        ))}
    </div>
  );
};

export default VolonteersList;
