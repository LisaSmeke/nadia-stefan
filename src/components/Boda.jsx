import '../style_components/boda.css';
import mer5758 from '../assets/MER_5758_small.jpg';
import mer5845 from '../assets/MER_5845.jpg';
import xolatlaco from '../assets/xolatlaco1.png';
// import Map from './Map';

const Boda = () => {
  return (
    <div className="boda-container">
      <div className="boda-header-container">
        <div className="boda-header">
          <h1>
            ¡Hola! Estamos muy felices y agradecidos de que nos acompañes a celebrar el día de
            nuestra boda. Aquí encontrarás todos los detalles del evento.
          </h1>
          <p>¡Esperamos verte en enero para celebrar en grande!</p>
          <p className="signature">- Nadia & Stefan</p>
        </div>
      </div>

      {/*Ceremonia/Recepción*/}
      <div className="ceremonia-recepcion-container">
        <div className="ceremonia-recepcion">
          <div className="ceremonia-recepcion-text">
            <h2 className="boda-h2">Ceremonia & Recepción</h2>
            <p className="main-info">Sábado 27 de enero, 2024 a la 1:30pm</p>
            <p className="main-info">Jardín Xolatlaco</p>
            <p className="address">
              Carretera Tepoztlán - Amatlán no. 1000 - B Amatlán de Quetzalcóatl, Tepoztlán Morelos
              CP 62525
            </p>
            <a href="https://waze.com/ul/h9g3ecwhep" target="_blank" rel="noreferrer">
              <button className="map-btn">Sigue Waze</button>
            </a>
            <a href="https://maps.app.goo.gl/ENe7YmdFubLPBpYC8" target="_blank" rel="noreferrer">
              <button className="map-btn">Sigue Google Maps</button>
            </a>
            <p className="note">
              El destino debe ser “Jardín Xolatlaco” (NO solamente “Xolatlaco”, ya que te puede
              llevar a otro lugar).
            </p>
            <div className="bullets">
              <ul className="boda-ul">
                <li>Te esperamos a la 1:30pm para la ceremonia.</li>
                <li>
                  Por favor toma en cuenta que los sábados suele haber mucho tráfico en el centro de
                  Tepoztlán, te pedimos considerarlo dentro de tus planes.
                </li>
                <li>
                  Habrá servicio de valet parking, pero te recomendamos llegar en taxi si vas a
                  tomar durante el fiestón. A la salida habrá servicio de camionetas hacia los
                  hoteles en tres horarios: 12:00am, 1:00am, 2:00am.{' '}
                </li>
                <li>
                  Al llegar, Jardín Xolatlaco se encontrará a mano derecha; verás una puerta grande
                  de madera y un letrero que dice “XOLATLACO”.
                  <img
                    className="entrance-img"
                    src={xolatlaco}
                    alt="Puerta grande de madera en la entrada de Jardín Xolatlaco."
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="ceremonia-recepcion-img-container">
            <img className="ceremonia-recepcion-img" src={mer5758} alt="Nadia y Stefan en Oaxaca" />
          </div>
        </div>
      </div>
      {/*Dresscode*/}
      <div className="dresscode-container">
        <div className="dresscode">
          <div className="dresscode-img-container">
            <img className="dresscode-img" src={mer5845} alt="Nadia y Stefan en Oaxaca" />
          </div>
          <div className="dresscode-text">
            <h2 className="boda-h2">Código de vestimenta</h2>
            <p className="main-info">Formal</p>
            <ul className="boda-ul">
              <li>Mujeres: vestido midi o largo (de día) </li>
              <li>Hombres: traje</li>
            </ul>
            <p className="note">
              Durante el día esperamos que el clima esté bonito/caluroso, pero en la noche hará
              frío, ¡por favor lleva algo abrigador!{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boda;
