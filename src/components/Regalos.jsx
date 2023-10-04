import '../style_components/regalos.css';
import ns136 from '../assets/NS-136.jpg';

const Regalos = () => {
  return (
    <div className="regalos">
      <div className="regalos-container">
        <div className="regalos-text">
          <h2 className="regalos-h2">Mesa de regalos</h2>
          <p className="regalos-info">
            El mejor regalo que puedes darnos es tu presencia, pero si además quieres regalarnos
            algo para la nueva etapa que empezaremos juntos, te lo agradecemos mucho.
          </p>
          <a
            href="https://evento.uniko.co/nadiaystefan/gift-table"
            target="_blank"
            rel="noreferrer"
          >
            <button className="regalos-btn">Ir a mesa de regalos UNIKO</button>
          </a>
        </div>
        <div className="regalos-img-container">
          <img className="regalos-img" src={ns136} alt="Nadia y Stefan en Oaxaca" />
        </div>
      </div>
    </div>
  );
};

export default Regalos;
