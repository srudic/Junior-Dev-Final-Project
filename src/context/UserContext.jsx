import { createContext, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../firebase-config";

const UserContext = createContext({
  activityTypes: [],
  associationsList: [],
  associationsRequestList: [],
  isAdminMode: Boolean,
  getActivityTypes: () => {},
  getAssociationsList: () => {},
  getAssociationsRequestList: () => {},
  getVolonteersList: () => {},
  setActivityTypes: () => {},
  setAssociationsList: () => {},
  setAssociationsRequestList: () => {},
  setIsAdminMode: () => {},
  setVolonteersList: () => {},
  volonteersList: [],
});

export function UserContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [associationsList, setAssociationsList] = useState([]);
  const [associationsRequestList, setAssociationsRequestList] = useState([]);
  const [activityTypes, setActivityTypes] = useState([]);
  const [volonteersList, setVolonteersList] = useState([]);

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

  const getActivityTypes = async () => {
    try {
      const data = await getDocs(collection(db, "activity-types"));
      const responsedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setActivityTypes(responsedData);
    } catch (err) {
      console.error(err);
    }
  };

  const getVolonteersList = async () => {
    try {
      const data = await getDocs(collection(db, "volonteers"));
      const responsedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setVolonteersList(responsedData);
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    activityTypes,
    associationsList,
    associationsRequestList,
    getActivityTypes,
    getAssociationsList,
    getAssociationsRequestList,
    getVolonteersList,
    isAdminMode,
    setIsAdminMode,
    volonteersList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
