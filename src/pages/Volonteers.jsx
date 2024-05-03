import { useContext, useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Heading from "../components/UI/Heading/Heading";
import UserContext from "../context/UserContext";
import VolonteersList from "../components/VolonteersList/VolonteersList";
import Wrapper from "../components/UI/Wrapper/Wrapper";

const Volonteers = () => {
  const { getVolonteersList, volonteersList, tag } = useContext(UserContext);

  const [volonteerListToDisplay, setVolonteerListToDisplay] = useState([]);

  useEffect(() => {
    getVolonteersList();
  }, []);

  useEffect(() => {
    const newVolonteerListToDisplay = volonteersList.filter((volunteer) => {
      const volunteerTags = volunteer.activity_types.map(({ name }) => name);
      return tag.every((t) => volunteerTags.includes(t));
    });

    setVolonteerListToDisplay(newVolonteerListToDisplay);
  }, [tag, volonteersList]);

  return (
    <Wrapper>
      <Heading title="Volonteri" />
      <Header volonteersFlag />
      <VolonteersList data={volonteerListToDisplay} />
    </Wrapper>
  );
};

export default Volonteers;
