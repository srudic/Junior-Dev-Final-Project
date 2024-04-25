const ACTIVITIES = [
  {
    id: 1,
    name: "Kuhanje za beskućnike",
    date: "30/05/2024",
    location: "Split",
  },
  { id: 2, name: "Maraton lađa", date: "30/06/2024", location: "Split" },
  { id: 3, name: "Trčanje štafete", date: "31/07/2024", location: "Split" },
];

import Cards from "../../components/Cards/Cards";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

const Activities = () => {
  return (
    <Wrapper>
      <Cards activities={ACTIVITIES} />
    </Wrapper>
  );
};

export default Activities;
