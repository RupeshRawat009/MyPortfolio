import '../styles/components/TechStack.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';

export default function TechStack() {
  return (
    <section className="tech-section">
      <h2 className="tech-heading">Tech Stack</h2>
      <div className="tech-grid">
        <div className="tech-card">
          <FaHtml5 className="tech-icon" aria-label="HTML5" />
          <span className="tech-label">HTML</span>
        </div>
        <div className="tech-card">
          <FaCss3Alt className="tech-icon" aria-label="CSS3" />
          <span className="tech-label">CSS</span>
        </div>
        <div className="tech-card">
          <SiJavascript className="tech-icon" aria-label="JavaScript" />
          <span className="tech-label">JavaScript</span>
        </div>
        <div className="tech-card">
          <FaReact className="tech-icon" aria-label="React" />
          <span className="tech-label">React</span>
        </div>
        <div className="tech-card">
          <FaNodeJs className="tech-icon" aria-label="Node.js" />
          <span className="tech-label">Node.js</span>
        </div>
        <div className="tech-card">
          <SiExpress className="tech-icon" aria-label="Express" />
          <span className="tech-label">Express</span>
        </div>
        <div className="tech-card">
          <SiMongodb className="tech-icon" aria-label="MongoDB" />
          <span className="tech-label">MongoDB</span>
        </div>
      </div>
    </section>
  );
}