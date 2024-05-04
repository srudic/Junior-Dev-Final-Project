import { FaGithub } from "react-icons/fa6";
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
            titleColor="#0D47A1"
            title="Github repozitorij"
            icon={<FaGithub size={20} />}
            onClickButton={() => handleGithubRepo()}
          />
        </div>
        <div>
          Da biste saznali nešto više o meni posjetite
          <Button
            title="Github"
            titleColor="#0D47A1"
            icon={<FaGithub size={20} />}
            onClickButton={() => handleGithubProfile()}
          />
          <Button
            title="LinkedIn"
            titleColor="#0D47A1"
            icon={<FaLinkedin size={20} color="#0D47A1" />}
            onClickButton={() => handleLinkedInProfile()}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
