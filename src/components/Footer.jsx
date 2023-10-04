import '../style_components/footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/ns-logo-green.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="initials-container">
        <div className="initials-date">
          <Link className="link-initials" to="/">
            <img className="initials" src={logo} alt="N&S logo" />
          </Link>
          <p className="date">27.01.2024</p>
        </div>
      </div>
      <footer>
        <p className="copyright">&copy; 2023 by LSM</p>
      </footer>
    </div>
  );
};

export default Footer;
