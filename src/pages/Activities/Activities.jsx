const ACTIVITIES = [
  {
    id: 1,
    name: "Kuhanje za beskućnike",
    date: "30/05/2024",
    location: "Split",
    association: "Udruga MOST Split",
    description: "Volonter bi kuhao za beskucnike u prostoru pučke kuhinje. ",
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
    description:
      "Volonter bi pomagao osobi s invaliditetom u kreativnom izražavanju i radu s glinom. Proces stvaranja originalnog djela ide od oblikovanja, bojanja glaziranja da bi na kraju taj proizvod bio uporabljiv, ili služio za ukras. Konačnica svih radova je izložba u javnosti na radnim događanjima i obilježavanjima da se vide mogućnosti osoba s invaliditetom na polju terapijskog rada s glinom.",
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
    description:
      "Dragi kreativci, potrebna nam je u pomoć u osmišljavanju i provedbi kreativnih radionica za slijepe. Potrebne su nam osobe s idejama što raditi, koji materijal nabaviti te osobe koje će slijepim osobama pomoći pri kreativnom radu. Sudjelovanje u radionicama slijepim osobama omogućava kreativno izražavanje, podizanje samopouzdanja, pruža osjećaj ispunjenosti i pripadnosti grupi.",
    participants: [
      { id: 1, name: "Sanja Rudić" },
      { id: 2, name: "Sanja Rudić2" },
      { id: 3, name: "Sanja Rudić3" },
    ],
  },
];

import Header from "../../components/Header/Header";
import Cards from "../../components/Shared/Cards/Cards";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Heading from "../../components/UI/Heading/Heading";

//TODO
// aktivnosti možete poredati po vremenu dodavanja ili dodajte opciju sortiranja po nekom parametru (datum, grad ili slično)

const Activities = () => {
  return (
    <Wrapper>
      <Heading title="Aktivnosti" />
      <Header activitiesFlag />
      <Cards data={ACTIVITIES} activities />
    </Wrapper>
  );
};

export default Activities;
