import { createContext, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../firebase-config";

import { ACTIVITY_TYPES } from "../utils/constants";

const UserContext = createContext({
  activitiesList: [],
  associationsList: [],
  associationsRequestList: [],
  isAdminMode: Boolean,
  tag: [],
  getActivitiesList: () => {},
  getAssociationsList: () => {},
  getAssociationsRequestList: () => {},
  getVolonteersList: () => {},
  setActivitiesList: () => {},
  setActivityTypes: () => {},
  setAssociationsList: () => {},
  setAssociationsRequestList: () => {},
  setIsAdminMode: () => {},
  setTag: () => {},
  setVolonteersList: () => {},
  sortBy: () => {},
  volonteersList: [],
});

export function UserContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [associationsList, setAssociationsList] = useState([]);
  const [associationsRequestList, setAssociationsRequestList] = useState([]);
  const [volonteersList, setVolonteersList] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);
  const [tag, setTag] = useState([]);

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

  const getVolonteersList = async () => {
    try {
      const data = await getDocs(collection(db, "volonteers"));
      const responsedData = data.docs.map((doc) => {
        const volunteerData = {
          ...doc.data(),
          id: doc.id,
        };

        // Find the corresponding activity type object
        const newActivityTypes = ACTIVITY_TYPES.filter(({ id }) =>
          volunteerData.activity_types.includes(id)
        );

        volunteerData.activity_types = newActivityTypes;

        // return populated volunteer object
        return volunteerData;
      });

      // console.log(responsedData);

      setVolonteersList(responsedData);
    } catch (err) {
      console.error(err);
    }
  };

  const getActivitiesList = async () => {
    try {
      const data = await getDocs(collection(db, "activities"));
      const responsedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setActivitiesList(responsedData);
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    activitiesList,
    associationsList,
    associationsRequestList,
    getActivitiesList,
    getAssociationsList,
    getAssociationsRequestList,
    getVolonteersList,
    isAdminMode,
    setIsAdminMode,
    setAssociationsList,
    setVolonteersList,
    setActivitiesList,
    setTag,
    tag,
    volonteersList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
