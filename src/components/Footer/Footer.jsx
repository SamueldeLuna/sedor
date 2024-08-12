// CSS
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerBody">
      <div className="footerFlex">
        <div className="footerContact">
          <div className="footerConTitel">KONTAKT</div>
          <div className="footerConList">sedor@gmail.com</div>
        </div>
        <div className="footerContact">
          <div className="footerConTitel">Stockholm</div>
          <div className="footerConList">Bergshamra</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
