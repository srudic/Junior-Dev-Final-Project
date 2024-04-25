const ACTIVITIES = [
  {
    id: 1,
    name: "Kuhanje za beskućnike",
    date: "30/05/2024",
    location: "Split",
    association: "Udruga MOST Split",
    participants: [
      { id: 1, name: "Sanja Rudić" },
      { id: 2, name: "Sanja Rudić2" },
      { id: 3, name: "Sanja Rudić3" },
    ],
  },
  {
    id: 2,
    name: "Pomoć na radionici keramike",
    date: "15/04/2024",
    location: "Split",
    association: "Udruga osoba sa cerebralnom paralizom Srce Split",
    participants: [
      { id: 1, name: "Sanja Rudić" },
      { id: 2, name: "Sanja Rudić2" },
      { id: 3, name: "Sanja Rudić3" },
    ],
  },
  {
    id: 3,
    name: "Pomoć u kreativnim radionicama",
    date: "31/05/2024",
    location: "Split",
    association: "Županijska udruga slijepih Split",
    participants: [
      { id: 1, name: "Sanja Rudić" },
      { id: 2, name: "Sanja Rudić2" },
      { id: 3, name: "Sanja Rudić3" },
    ],
  },
];

import Cards from "../../components/Cards/Cards";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

//TODO
// aktivnosti možete poredati po vremenu dodavanja ili dodajte opciju sortiranja po nekom parametru (datum, grad ili slično)

//Dodavanje novih aktivnosti - svi korisnici imaju opciju dodavanja novih aktivnosti u popis.
//Potrebno je samo popuniti sve potrebne podatke i nakon potvrde unosa, nova aktivnost se dodaje u popis aktivnosti.
//Po želji implementirajte različite provjere unosa.

const Activities = () => {
  return (
    <Wrapper>
      <Cards activities={ACTIVITIES} />
    </Wrapper>
  );
};

export default Activities;
