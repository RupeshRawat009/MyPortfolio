import '../styles/components/Projects.css';
import weatherImg from '../assets/weather.png'; // Weather Forecast image
import quickAppImg from '../assets/quickapp.png'; // Quick App image

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">
        <span className="heading-text">Projects</span>
      </h2>

      {/* Weather Forecast Project */}
      <div className="project-card">
        <img src={weatherImg} alt="Weather Forecast Project" className="project-image" />
        <h3 className="project-title">Weather Forecast</h3>
        <p className="project-description">
          This is a React and CSS-based weather forecast application that utilizes the OpenWeather API to provide real-time weather information. Users can search for a city to view key metrics like temperature, humidity, wind speed, and AQI, as well as hourly and daily forecasts. The project also features a map-based search functionality, likely powered by Leaflet, to enhance the user experience.
        </p>
        <div className="tech-tags">
          <span className="tag">React</span>
          <span className="tag">CSS</span>
          <span className="tag">OpenWeather API</span>
          <span className="tag">Leaflet</span>
        </div>
        <a
          href="https://weathering-forecast-xql4-git-main-rawat-jis-projects.vercel.app?_vercel_share=WU8kBOKRZK62hciTqqo77gYBfJz7cRMP"
          target="_blank"
          rel="noopener noreferrer"
          className="demo-button"
        >
          DEMO
        </a>
      </div>
<br /><br />
      {/* Quick App Project */}
      <div className="project-card">
        <img src={quickAppImg} alt="Quick App Project" className="project-image" />
        <h3 className="project-title">Quick App</h3>
        <p className="project-description">
          Developed a robust and intuitive real-time messaging platform, <strong>Quick App</strong>, leveraging the <strong>MERN stack</strong> and <strong>Socket.IO</strong>. This project showcases architectural prowess in creating a seamless, full-stack application with bidirectional communication, ensuring a dynamic and responsive user experience.
        </p>
        <div className="tech-tags">
          <span className="tag">MongoDB</span>
          <span className="tag">Express</span>
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">Socket.IO</span>
        </div>
 <a
          href="https://chatting-application-frontend-git-main-rawat-jis-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="demo-button"
        >
          DEMO
        </a>
      </div>
    </section>
  );
}