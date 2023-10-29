import '../style_components/rsvp.css';
import ns243 from '../assets/ns-243_small.jpg';

const Rsvp = () => {
  return (
    <div className="rsvp">
      <div className="rsvp-text">
        <h2 className="rsvp-h2">¿Podrás acompañarnos?</h2>
        <div className="rsvp-info-container">
          <p className="rsvp-info">¡Te esperamos con toda la emoción y alegría del mundo!</p>
          <p className="rsvp-info">
            Por favor recuerda confirmar tu asistencia a través de WhatsApp.
          </p>
        </div>
      </div>
      <img className="rsvp-img" src={ns243} alt="Nadia y Stefan en Oaxaca"></img>
    </div>
  );
};

export default Rsvp;
