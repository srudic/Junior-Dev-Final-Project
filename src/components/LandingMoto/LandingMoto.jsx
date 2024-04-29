import volonterIcon from "../../assets/volunteer.png";
import styles from "./LandingMoto.module.css";
import volonteerimage from "../../assets/volunteer2.png";

const LandingMoto = () => {
  return (
    <>
      <div className={styles.motoContainer}>
        <h2>
          Želiš postati
          <span>
            Voloteer<span>Ko</span>?
          </span>
          Ko?
        </h2>
        <h2>Voloteer</h2>
        <img src={volonterIcon} alt="volonteerIcon" />
      </div>
      <h3>Na pravom si mjestu.</h3>
      <h3>Možeš saznati nešto o volonterima pod Volonteri.</h3>
      <h3>Pronađi aktivnosti na kojoj želiš sudjelovati pod Aktivnosti.</h3>
      <h3>
        Ukoliko si dio uprave jedne Udruge slobodno se prijavi kao Udruga i
        pričekaj da naš administrator odobri tvoj zahtjev.
      </h3>
      <h3>
        Ako si ipak u prolazu, osvrni se što sve dobro rade volonteri pa možda
        se predomisliš i postaneš i ti dio našeg tima volontera.
      </h3>
      <h2>Veselimo ti se!</h2>
      <div className={styles.Image}>
        <img src={volonteerimage} alt="volonteerImage" />
      </div>
    </>
  );
};

export default LandingMoto;
