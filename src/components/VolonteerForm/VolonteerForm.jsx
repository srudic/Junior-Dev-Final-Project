import { useContext } from "react";
import { useForm } from "react-hook-form";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

import UserContext from "../../context/UserContext";
import towns from "../../assets/hr.json";
import styles from "./VolonteerForm.module.css";

import { ACTIVITY_TYPES } from "../../utils/constants";

const sortArrayOfObjectsByCity = (array) => {
  return array.sort((a, b) => {
    const cityA = a.city.toLowerCase();
    const cityB = b.city.toLowerCase();

    if (cityA < cityB) {
      return -1;
    }
    if (cityA > cityB) {
      return 1;
    }
    return 0;
  });
};

const VolonteerForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { getVolonteersList } = useContext(UserContext);

  const sortedTowns = sortArrayOfObjectsByCity(towns);
  const filteredData = sortedTowns.filter(
    (item) => item.admin_name === "Splitsko-Dalmatinska Županija"
  );

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await addDoc(collection(db, "volonteers"), {
        name_surname: data.name,
        city: data.city,
        activity_types: data.volonteer_jobs,
      });
      getVolonteersList();
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
        <div className={styles.FormGroup}>
          <label className={styles.Label}>Ime i prezime</label>
          <input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            className={styles.InputField}
          />
          {errors.name && (
            <span className={styles.ErrorMessage}>
              Ime i prezime je obavezno.
            </span>
          )}
        </div>
        <div className={styles.FormGroupRow}>
          <div className={styles.FormGroup}>
            <label className={styles.Label}>Posao</label>

            <div className={styles.FormGroupRow}>
              <div className={styles.RadioButtonGroup}>
                {ACTIVITY_TYPES.map((job) => (
                  <div className={styles.RadioButtonContainer} key={job.id}>
                    <input
                      type="checkbox"
                      id={job.id}
                      {...register("volonteer_jobs")}
                      value={job.id}
                      className={styles.InputField}
                    />
                    <label htmlFor={job.id} className={styles.RadioButtonLabel}>
                      {job.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.FormGroup}>
            <label className={styles.Label}>Grad</label>
            <select
              {...register("city")}
              className={[styles.SelectField, styles.ScrollableDropdown].join(
                " "
              )}
              defaultValue="defaultTown"
            >
              <option value="defaultTown" disabled>
                Izaberi grad
              </option>
              {filteredData.map((city) => (
                <option value={city.code} key={Math.random()}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className={styles.SubmitButton}>
          POTVRDI
        </button>
      </form>
    </>
  );
};

export default VolonteerForm;
