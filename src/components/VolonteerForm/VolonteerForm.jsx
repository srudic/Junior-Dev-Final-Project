import { useForm } from "react-hook-form";

import towns from "../../assets/hr.json";
import styles from "./VolonteerForm.module.css";

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

const VOLONTEER_JOBS = [
  { id: "ekologija", value: "Ekologija" },
  { id: "edukacija", value: "Edukacija" },
  { id: "prijevoz", value: "Prijevoz" },
  { id: "razno", value: "Razno" },
];

const VolonteerForm = () => {
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
                {VOLONTEER_JOBS.map((job) => (
                  <div className={styles.RadioButtonContainer} key={job.id}>
                    <input
                      type="checkbox"
                      id={job.id}
                      {...register("volonteer_jobs")}
                      value={job.value}
                      className={styles.InputField}
                    />
                    <label htmlFor={job.id} className={styles.RadioButtonLabel}>
                      {job.value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
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
                <option value={town.code} key={Math.random()}>
                  {town.city}
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
