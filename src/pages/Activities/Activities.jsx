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

import ActivityHeader from "../../components/ActivityHeader/ActivityHeader";
import Cards from "../../components/Shared/Cards/Cards";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Heading from "../../components/UI/Heading/Heading";

//TODO
// aktivnosti možete poredati po vremenu dodavanja ili dodajte opciju sortiranja po nekom parametru (datum, grad ili slično)

const Activities = () => {
  return (
    <Wrapper>
      <Heading title="Aktivnosti" />
      <ActivityHeader />
      <Cards data={ACTIVITIES} activities />
    </Wrapper>
  );
};

export default Activities;
