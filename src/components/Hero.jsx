import '../style_components/hero.css';
import ns199 from '../assets/ns-199_small.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <img className="hero-img" src={ns199} alt="Nadia & Stefan's engagement in Oaxaca" />
      <div className="centered-text">
        <h1 className="hero-h1">Nadia & Stefan</h1>
        <h2 className="hero-h2">27 Enero, 2024 &#x2022; Tepoztlán, Morelos</h2>
      </div>
    </div>
  );
};
export default Hero;
