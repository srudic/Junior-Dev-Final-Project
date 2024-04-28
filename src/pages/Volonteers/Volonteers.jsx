import Header from "../../components/Header/Header";
import Heading from "../../components/UI/Heading/Heading";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import VolonteersList from "../../components/VolonteersList/VolonteersList";

const VOLONTEERS = [
  {
    id: 1,
    name: "Sanja Rudić",
    city: "Kaštel Novi",
    jobs: [
      { id: 1, name: "Edukacija" },
      { id: 2, name: "Razno" },
      { id: 3, name: "Razno" },
      { id: 4, name: "Razno" },
    ],
  },
  {
    id: 2,
    name: "Marin Rudić",
    city: "Kaštel Novi",
    jobs: [
      { id: 1, name: "Edukacija" },
      { id: 2, name: "Razno" },
    ],
  },
  {
    id: 3,
    name: "Sanja Rudić",
    city: "Kaštel Novi",
    jobs: [
      { id: 1, name: "Edukacija" },
      { id: 2, name: "Razno" },
    ],
  },
  {
    id: 4,
    name: "Marin Rudić",
    city: "Kaštel Novi",
    jobs: [
      { id: 1, name: "Edukacija" },
      { id: 2, name: "Razno" },
    ],
  },
];

const Volonteers = () => {
  return (
    <Wrapper>
      <Heading title="Volonteri" />
      <Header volonteersFlag />
      <VolonteersList data={VOLONTEERS} />
    </Wrapper>
  );
};

export default Volonteers;
