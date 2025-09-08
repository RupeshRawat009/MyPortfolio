// src/components/Header.jsx
import '../styles/components/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>RUPESH.dev</h1>
        
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#Certification">Certification</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}