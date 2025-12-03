import { skillsData } from "./skillsData";
import ProgressBar from "./ProgressBar";

const MySkills = () => {
  return (
    <section className="container" id="blogs">
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            My <span>Skills</span>
            <span className="bg-text">My Skills</span>
          </h2>
        </div>

        <div className="about-stats" style={{ marginTop: "5rem" }}>
          <div className="progress-bars">
            {skillsData.map((skill) => (
              <ProgressBar
                key={skill.title}
                title={skill.title}
                percent={skill.percent}
                className={skill.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
