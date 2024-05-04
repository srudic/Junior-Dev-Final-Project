import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase-config";

import towns from "../../assets/hr.json";
import styles from "./ActivityForm.module.css";
import UserContext from "../../context/UserContext";

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

const ActivityForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { associationsList, addNewActivityToList } = useContext(UserContext);

  const [associationOption, setAssociationOption] = useState("");

  const sortedTowns = sortArrayOfObjectsByCity(towns);
  const filteredData = sortedTowns.filter(
    (item) => item.admin_name === "Splitsko-Dalmatinska Županija"
  );

  const handleAssociationChange = (e) => {
    setAssociationOption(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      const res = await addDoc(collection(db, "activities"), {
        association: data.association,
        date: data.date,
        description: data.description,
        city: data.city,
        name: data.title,
        participants: [],
        creationdate: Timestamp.fromDate(new Date()),
      });
      addNewActivityToList({
        id: res.id,
        association: data.association,
        date: data.date,
        description: data.description,
        city: data.city,
        name: data.title,
        participants: [],
      });
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
        <div className={styles.FormGroup}>
          <label className={styles.Label}>Naziv</label>
          <input
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            className={styles.InputField}
          />
          {errors.title && (
            <span className={styles.ErrorMessage}>Naziv je obavezan.</span>
          )}
        </div>

        <div className={styles.FormGroupRow}>
          <div className={styles.FormGroup}>
            <label className={styles.Label}>Datum</label>
            <input
              {...register("date", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              className={styles.InputField}
            />
            {errors.date && (
              <span className={styles.ErrorMessage}>Datum je obavezan.</span>
            )}
          </div>
          <div className={styles.FormGroup}>
            <label className={styles.Label}>Lokacija</label>
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
                <option value={city.code}>{city.city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.FormGroup}>
          <label className={styles.Label}>Opis</label>
          <input
            {...register("description", {
              required: false,
              minLength: 5,
            })}
            className={styles.InputField}
          />
          {errors.description && (
            <span className={styles.ErrorMessage}>
              Opis treba imati od 5 do 100 slova.
            </span>
          )}
        </div>
        <div className={styles.FormGroup}>
          <label className={styles.Label}>Udruga</label>
          <div className={styles.FormGroupRow}>
            <div className={styles.RadioButtonGroup}>
              <div className={styles.RadioButtonContainer}>
                <input
                  type="radio"
                  id="associationYes"
                  {...register("association", { required: true })}
                  value="Yes"
                  className={styles.InputField}
                  onChange={handleAssociationChange}
                />
                <label
                  htmlFor="associationYes"
                  className={styles.RadioButtonLabel}
                >
                  Da
                </label>
              </div>
              <div className={styles.RadioButtonContainer}>
                <input
                  type="radio"
                  id="associationNo"
                  {...register("association", { required: true })}
                  value="No"
                  className={styles.InputField}
                  onChange={handleAssociationChange}
                />
                <label
                  htmlFor="associationNo"
                  className={styles.RadioButtonLabel}
                >
                  Ne
                </label>
              </div>
            </div>
            {associationOption === "Yes" && (
              <div className={styles.FormGroup}>
                <select
                  {...register("association")}
                  className={[
                    styles.SelectField,
                    styles.ScrollableDropdown,
                  ].join(" ")}
                  defaultValue="defaultAssociation"
                >
                  <option value="defaultAssociation" disabled>
                    Izaberi udrugu
                  </option>
                  {associationsList.map((association) => (
                    <option value={association.id}>{association.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          {errors.association && (
            <span className={styles.ErrorMessage}>Označite odabir udruge.</span>
          )}
        </div>

        <button type="submit" className={styles.SubmitButton}>
          POTVRDI
        </button>
      </form>
    </>
  );
};

export default ActivityForm;
