// Assets
import mailIcon from "../../assets/mailIcon.webp";

// CSS
import "./ContactFlag.css";

const ContactFlag = () => {
  return (
    <>
      <div className="contactFlagTitel">KONTAKTA oSs</div>
      <div className="contactConFlex">
        <img src={mailIcon} alt="mailbox icon" className="contactMailIcon" />
        <div className="contactConTitel">studiosedor@gmail.com</div>
      </div>
    </>
  );
};

export default ContactFlag;
