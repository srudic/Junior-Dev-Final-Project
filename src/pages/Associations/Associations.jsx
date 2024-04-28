import { useContext, useEffect } from "react";

import Cards from "../../components/Shared/Cards/Cards";
import Header from "../../components/Header/Header";
import Heading from "../../components/UI/Heading/Heading";
import UserContext from "../../context/UserContext";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

const Associations = () => {
  const {
    isAdminMode,
    getAssociationsList,
    associationsList,
    associationsRequestList,
    getAssociationsRequestList,
  } = useContext(UserContext);

  useEffect(() => {
    getAssociationsList();
    getAssociationsRequestList();
  }, []);

  return (
    <Wrapper>
      <Heading title="Popis udruga" />
      <Header associationsFlag />
      <Cards data={associationsList} />
      {isAdminMode && <Heading title="Zahtjevi za odobrenje" />}
      {isAdminMode && <Cards data={associationsRequestList} requestsFlag />}
    </Wrapper>
  );
};

export default Associations;
