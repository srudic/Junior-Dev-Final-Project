import { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { FaCirclePlus } from "react-icons/fa6";
import ActivityForm from "../ActivityForm/ActivityForm";

const ActivityHeader = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const handleOpenAddForm = () => {
    console.log("Dodaj");
    setIsAddFormOpen(true);
  };

  const closeModal = () => {
    setIsAddFormOpen(false);
  };
  return (
    <>
      <Button
        title="DODAJ"
        titleColor="#00b300"
        icon={<FaCirclePlus size={20} color="#00b300" />}
        onClickButton={handleOpenAddForm}
      />
      {isAddFormOpen && (
        <Modal closeModal={closeModal} isOpen={isAddFormOpen}>
          <ActivityForm />
        </Modal>
      )}
    </>
  );
};

export default ActivityHeader;
