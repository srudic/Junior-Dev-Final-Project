import { useContext } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

import UserContext from "../../context/UserContext";

import towns from "../../assets/hr.json";
import styles from "./AssociationForm.module.css";

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

const AssociaionForm = ({ handleApprovalRequestSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addNewAssociationRequestToList } = useContext(UserContext);

  const sortedTowns = sortArrayOfObjectsByCity(towns);
  const filteredData = sortedTowns.filter(
    (item) => item.admin_name === "Splitsko-Dalmatinska Županija"
  );

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await addDoc(collection(db, "approval-requests"), {
        name: data.name,
        address: data.address,
        city: data.city,
      });
      addNewAssociationRequestToList({
        id: res.id,
        name: data.name,
        address: data.address,
        city: data.city,
      });

      handleApprovalRequestSuccess();
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
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            className={styles.InputField}
          />
          {errors.title && (
            <span className={styles.ErrorMessage}>Naziv je obavezan.</span>
          )}
        </div>
        <div className={styles.FormGroupRow}>
          <div className={styles.FormGroup}>
            <label className={styles.Label}>Adresa</label>
            <input
              {...register("address", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              className={styles.InputField}
            />
            {errors.address && (
              <span className={styles.ErrorMessage}>Adresa je obavezna.</span>
            )}
          </div>
          <div className={styles.FormGroup}>
            <label className={styles.Label}>Grad</label>
            <select
              {...register("city", { required: true })}
              className={[styles.SelectField, styles.ScrollableDropdown].join(
                " "
              )}
              defaultValue="defaultTown"
            >
              <option value="defaultTown" disabled>
                Izaberi grad
              </option>
              {filteredData.map((city, index) => (
                <option value={city.code} key={`${city.code}-${index}`}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>
          {errors.city && (
            <span className={styles.ErrorMessage}>Odaberite grad.</span>
          )}
        </div>
        <button type="submit" className={styles.SubmitButton}>
          POTVRDI
        </button>
      </form>
    </>
  );
};

export default AssociaionForm;
