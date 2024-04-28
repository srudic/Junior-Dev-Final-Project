import { useContext, useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Heading from "../../components/UI/Heading/Heading";
import UserContext from "../../context/UserContext";
import VolonteersList from "../../components/VolonteersList/VolonteersList";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

const Volonteers = () => {
  const { activityTypes, getActivityTypes, getVolonteersList, volonteersList } =
    useContext(UserContext);

  const [volonteerListToDisplay, setVolonteerListToDisplay] = useState([]);

  useEffect(() => {
    getActivityTypes();
    getVolonteersList();
  }, []);

  // Use functional update to ensure state consistency
  useEffect(() => {
    setVolonteerListToDisplay(() => {
      // Map through volonteersList to create the updated list
      const updatedList = volonteersList.map((volunteer) => {
        // Find the corresponding activity type object
        const newActivityTypes = activityTypes.filter(({ id }) =>
          volunteer.activity_types.includes(id)
        );

        return { ...volunteer, activity_types: newActivityTypes };
      });

      return updatedList;
    });
  }, [volonteersList]);

  return (
    <Wrapper>
      <Heading title="Volonteri" />
      <Header volonteersFlag />
      <VolonteersList data={volonteerListToDisplay} />
    </Wrapper>
  );
};

export default Volonteers;
