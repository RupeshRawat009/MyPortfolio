import '../styles/components/Banner.css';
import profileImg from '../assets/profileImg.jpg';
import { FaHome, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        {/* Profile Image */}
        <div className="profile-ring">
          <img src={profileImg} alt="Rupesh" className="profile-img" />
        </div>

        {/* Text + Info */}
        <div className="text-content">
          <div className="intro-line">
            <h1>Hey, I'm Rupesh.</h1>
            <h2>I'm a Frontend</h2>
            <span className="tag" style={{ backgroundColor: '#16A34A33', color: '#16A34A' }}>Open to work</span>
          </div>

          <h3 className="role">Software Developer.</h3>

          <div className="info-icons">
            <div><FaHome /> Delhi, India.</div>
            <div><FaLinkedin /> <a href="https://www.linkedin.com/in/rupesh-singh-rawat-ab8243286" target="_blank">LinkedIn</a></div>
            <div><FaGithub /> <a href="https://github.com/RupeshRawat009" target="_blank">GitHub</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}