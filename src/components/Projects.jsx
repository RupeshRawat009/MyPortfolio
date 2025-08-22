import '../styles/components/Projects.css';
import weatherImg from '../assets/weather.png'; // Replace with your actual image path

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">
  <span className="heading-text">Projects</span>
</h2>
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
        <a href="https://weathering-forecast.vercel.app" target="_blank" className="demo-button">DEMO</a>
      </div>
    </section>
  );
}