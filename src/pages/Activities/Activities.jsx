import { useState } from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Shared/Cards/Cards";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Heading from "../../components/UI/Heading/Heading";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";

//TODO
// aktivnosti možete poredati po vremenu dodavanja ili dodajte opciju sortiranja po nekom parametru (datum, grad ili slično)

const Activities = () => {
  const {
    activitiesList,
    associationsList,
    getActivitiesList,
    getAssociationsList,
  } = useContext(UserContext);

  const [listToDisplay, setListToDisplay] = useState([]);

  useEffect(() => {
    getAssociationsList();
    getActivitiesList();
  }, []);

  useEffect(() => {
    setListToDisplay(() => {
      const updatedList = activitiesList.map((activity) => {
        const newAssociation = associationsList.find(
          (association) => association.id === activity.association
        );

        const newAssociationName = newAssociation
          ? newAssociation.name
          : activity.association;

        return { ...activity, association: newAssociationName };
      });

      return updatedList;
    });
  }, [activitiesList]);

  return (
    <Wrapper>
      <Heading title="Aktivnosti" />
      <Header activitiesFlag />
      <Cards data={listToDisplay} activities />
    </Wrapper>
  );
};

export default Activities;
