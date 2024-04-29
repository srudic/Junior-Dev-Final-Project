import Button from "../UI/Button/Button";

const ApprovalMessage = ({ closeModal }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Zahjev uspješno poslan administratoru!</h3>
      <p>Udruga će biti dodana u popis nakon odobrenja.</p>
      <Button title="NASTAVI" titleColor="#00b300" onClickButton={closeModal} />
    </div>
  );
};

export default ApprovalMessage;
