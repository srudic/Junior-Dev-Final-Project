import Cards from "../../components/Shared/Cards/Cards";
import Heading from "../../components/UI/Heading/Heading";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

import { useContext } from "react";
import UserContext from "../../context/UserContext";

const ASSOCIATIONS = [
  {
    id: 1,
    name: "Udruga osoba sa cerebralnom paralizom Srce Split",
    address: "Mosećka ul. 62",
    city: "Split",
  },
  {
    id: 2,
    name: "Udruga MoSt",
    address: "Ul. Ivana Gundulića 52",
    city: "Split",
  },
  {
    id: 3,
    name: "Županijska udruga slijepih Split",
    address: "Zagrebačka ul. 17",
    city: "Split",
  },
];

const Associations = () => {
  const { isAdminMode } = useContext(UserContext);
  return (
    <Wrapper>
      <Heading title="Popis udruga" />
      <Cards data={ASSOCIATIONS} />
      {isAdminMode && <Heading title="Zahtjevi za odobrenje" />}
      {isAdminMode && <Cards data={ASSOCIATIONS} requestsFlag />}
    </Wrapper>
  );
};

export default Associations;
