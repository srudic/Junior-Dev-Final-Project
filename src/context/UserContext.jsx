import { createContext, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../firebase-config";

const UserContext = createContext({
  isAdminMode: Boolean,
  setIsAdminMode: () => {},
  associationsList: [],
  setAssociationsList: () => {},
  getAssociationsList: () => {},
  associationsRequestList: [],
  setAssociationsRequestList: () => {},
  getAssociationsRequestList: () => {},
});

export function UserContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [associationsList, setAssociationsList] = useState([]);
  const [associationsRequestList, setAssociationsRequestList] = useState([]);

  const getAssociationsList = async () => {
    try {
      const data = await getDocs(collection(db, "associations"));
      const responsedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAssociationsList(responsedData);
    } catch (err) {
      console.error(err);
    }
  };

  const getAssociationsRequestList = async () => {
    try {
      const data = await getDocs(collection(db, "approval-requests"));
      const responsedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAssociationsRequestList(responsedData);
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    isAdminMode,
    setIsAdminMode,
    getAssociationsList,
    associationsList,
    getAssociationsRequestList,
    associationsRequestList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
