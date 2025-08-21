import '../styles/components/WorkExperience.css';

export default function WorkExperience() {
  return (
    <section className="work-section">
      <h2 className="work-heading">
  <span className="heading-text">Work Experience</span>
</h2>
      <div className="work-card">
        <div className="work-header">
          <h3 className="company">Datacom <span className="via">via Forage</span></h3>
          <p className="role">Software Review & Bug Simulation</p>
        </div>
        <p className="work-description">
          Completed Datacom’s Virtual Experience Program focused on software usability review and bug resolution. Gained hands-on experience in diagnosing real-world UI/UX issues, analyzing customer feedback, and implementing code-level solutions using <strong>React</strong>, <strong>Leaflet</strong>, and <strong>MapLibre</strong>. Strengthened my ability to communicate technical findings clearly and contribute to agile development workflows.
        </p>
      </div>
    </section>
  );
}