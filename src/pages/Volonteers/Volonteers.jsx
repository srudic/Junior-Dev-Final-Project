import { useContext, useEffect } from "react";

import Header from "../../components/Header/Header";
import Heading from "../../components/UI/Heading/Heading";
import UserContext from "../../context/UserContext";
import VolonteersList from "../../components/VolonteersList/VolonteersList";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

const Volonteers = () => {
  const { activityTypes, getActivityTypes, getVolonteersList, volonteersList } =
    useContext(UserContext);

  useEffect(() => {
    getActivityTypes();
    getVolonteersList();
  }, []);

  const volonteerListToDisplay = [];

  volonteersList.forEach((volunteer) => {
    // Find the corresponding activity type object
    const activityType = activityTypes.find(
      (type) => type.id === volunteer["activity_types"]
    );

    // If the activity type is found, add the 'activity_types' array with id and name keys
    if (activityType) {
      const updatedVolunteer = {
        ...volunteer,
        activity_types: [
          { id: volunteer["activity_types"], name: activityType.name },
        ],
      };
      volonteerListToDisplay.push(updatedVolunteer);
    }
  });

  return (
    <Wrapper>
      <Heading title="Volonteri" />
      <Header volonteersFlag />
      <VolonteersList data={volonteerListToDisplay} />
    </Wrapper>
  );
};

export default Volonteers;
