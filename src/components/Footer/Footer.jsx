import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import Button from "../UI/Button/Button";
import Wrapper from "../UI/Wrapper/Wrapper";

import styles from "./Footer.module.css";

const Footer = () => {
  const handleGithubProfile = () => {
    window.open("https://github.com/srudic");
  };
  const handleLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/sanja-rudic-1a8b502a1/");
  };
  const handleGithubRepo = () => {
    window.open("https://github.com/srudic/Junior-Dev-Final-Project");
  };
  return (
    <div className={styles.Footer}>
      <Wrapper>
        <div>Ovaj projekt je dio Digitalna Dalmacija JUNIOR Dev edukacije.</div>
        <div>
          Za više detalja pogledajte
          <Button
            title="Github repozitorij"
            icon={<FaSquareGithub />}
            onClickButton={() => handleGithubRepo()}
          />
        </div>
        <div>
          Da biste saznali nešto više o meni posjetite
          <Button
            title="Github"
            icon={<FaSquareGithub />}
            onClickButton={() => handleGithubProfile()}
          />
          <Button
            title="LinkedIn"
            icon={<FaLinkedin />}
            onClickButton={() => handleLinkedInProfile()}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
