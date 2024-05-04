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
  setAssociationsList: () => {},
  setIsAdminMode: () => {},
  setTag: () => {},
  setVolonteersList: () => {},
  sortBy: () => {},
  volonteersList: [],
  addNewVolonteerToList: () => {},
  removeVolonteerFromListById: () => {},
  updateVolonteerInListById: () => {},
  removeActivityFromListById: () => {},
  addNewActivityToList: () => {},
  updateActivity: () => {},
  removeParticipantsFromActivity: () => {},
  addNewAssociationToList: () => {},
  removeAssociationFromList: () => {},
  removeAssociationRequest: () => {},
  addNewAssociationRequestToList: () => {},
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

  const addNewAssociationToList = (newAssociation) => {
    const updatedAssociationList = [...associationsList, newAssociation];
    setAssociationsList(updatedAssociationList);
  };

  const removeAssociationFromList = (associationId) => {
    const updatedAssociationList = associationsList.filter(
      (association) => association.id !== associationId
    );

    setAssociationsList(updatedAssociationList);
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

  const addNewAssociationRequestToList = (newRequest) => {
    const updatedRequestList = [...associationsRequestList, newRequest];
    setAssociationsRequestList(updatedRequestList);
  };

  const removeAssociationRequest = (requestId) => {
    const updatedRequestList = associationsRequestList.filter(
      (request) => request.id !== requestId
    );

    setAssociationsRequestList(updatedRequestList);
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

  const addNewVolonteerToList = (newVolonteer) => {
    const newActivityTypes = ACTIVITY_TYPES.filter(({ id }) =>
      newVolonteer.activity_types.includes(id)
    );
    newVolonteer.activity_types = newActivityTypes;
    const updatedVolonteerList = [...volonteersList, newVolonteer];
    setVolonteersList(updatedVolonteerList);
  };

  const updateVolonteerInListById = (volonteerIdToUpdate, updatedVolonteer) => {
    const newActivityTypes = ACTIVITY_TYPES.filter(({ id }) =>
      updatedVolonteer.activity_types.includes(id)
    );
    updatedVolonteer.activity_types = newActivityTypes;
    const updatedVolonteerList = volonteersList.map((volonteer) => {
      if (volonteer.id === volonteerIdToUpdate) {
        return { ...volonteer, ...updatedVolonteer };
      }
      return volonteer;
    });

    setVolonteersList(updatedVolonteerList);
  };

  const removeVolonteerFromListById = (volonteerIdToRemove) => {
    const updatedVolonteerList = volonteersList.filter(
      (volonteer) => volonteer.id !== volonteerIdToRemove
    );

    setVolonteersList(updatedVolonteerList);
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

  const addNewActivityToList = (newActivity) => {
    const updatedActivitiyList = [...activitiesList, newActivity];
    setActivitiesList(updatedActivitiyList);
  };

  const updateActivity = (activityId, newParticipants) => {
    const updatedVolonteerList = activitiesList.map((activity) => {
      if (activity.id === activityId) {
        const updatedParticipants = [...activity.participants, newParticipants];

        // Return the activity with updated participants
        return { ...activity, participants: updatedParticipants };
      }
      return activity;
    });

    setActivitiesList(updatedVolonteerList);
  };

  const removeParticipantsFromActivity = (activityId, participantToRemove) => {
    const updatedActivitiesList = activitiesList.map((activity) => {
      if (activity.id === activityId) {
        // Filter out the participant to remove from the participants array
        const updatedParticipants = activity.participants.filter(
          (participant) =>
            participant.name_surname !== participantToRemove.name_surname ||
            participant.phone !== participantToRemove.phone
        );

        // Return the activity with updated participants
        return { ...activity, participants: updatedParticipants };
      }
      // Return the activity as it is if its ID does not match
      return activity;
    });

    // Set the state with the updated activities list
    setActivitiesList(updatedActivitiesList);
  };

  const removeActivityFromListById = (activityIdToRemove) => {
    const updatedAcvitiyList = activitiesList.filter(
      (activity) => activity.id !== activityIdToRemove
    );

    setActivitiesList(updatedAcvitiyList);
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
    addNewVolonteerToList,
    removeVolonteerFromListById,
    updateVolonteerInListById,
    removeActivityFromListById,
    addNewActivityToList,
    updateActivity,
    removeParticipantsFromActivity,
    addNewAssociationToList,
    removeAssociationFromList,
    removeAssociationRequest,
    addNewAssociationRequestToList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
