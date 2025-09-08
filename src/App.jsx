import Header from './components/Header';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

import Contact from './components/Contact';



function App() {
  return (
    <>
      <Header />
       <Banner />
       <TechStack/>
       <WorkExperience />
      <section id="projects"><Projects /></section>
      <section id="Certification"></section>  <Certifications />
      <section id="contact"><Contact /></section>


    </>
  );
}

export default App;