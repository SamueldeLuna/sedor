// Assets
import mailIcon from "../../assets/mailIcon.webp";
import instaIcon from "../../assets/instaIcon.webp";

// CSS
import "./ContactFlag.css";

const ContactFlag = () => {
  return (
    <>
      <div className="contactFlagTitel">KONTAKTA oSs</div>
      <div className="contactConFlex">
        <div className="contactItemFlex">
          <img src={mailIcon} alt="mailbox icon" className="contactMailIcon" />
          <div className="contactConTitel">studiosedor@gmail.com</div>
        </div>
        <a
          href="https://www.instagram.com/sedorstudio/"
          className="contactItemFlex"
        >
          <img
            src={instaIcon}
            alt="instagram icon"
            className="contactMailIcon"
          />
          <div className="contactConTitel">@sedorstudio</div>
        </a>
      </div>
    </>
  );
};

export default ContactFlag;
