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
    name: "Sanja Rudić",
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
];

const Volonteers = () => {
  return (
    <Wrapper>
      <VolonteersList data={VOLONTEERS} />
    </Wrapper>
  );
};

export default Volonteers;
