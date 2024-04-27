import { useState } from "react";
import { useForm } from "react-hook-form";

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

const AssociaionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sortedTowns = sortArrayOfObjectsByCity(towns);
  const filteredData = sortedTowns.filter(
    (item) => item.admin_name === "Splitsko-Dalmatinska Županija"
  );

  const onSubmit = (data) => {
    console.log(data);
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
              {...register("town")}
              className={[styles.SelectField, styles.ScrollableDropdown].join(
                " "
              )}
              defaultValue="defaultTown"
            >
              <option value="defaultTown" disabled>
                Izaberi grad
              </option>
              {filteredData.map((town) => (
                <option value={town.code}>{town.city}</option>
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

export default AssociaionForm;
