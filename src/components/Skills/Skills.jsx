import "./Skills.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Preaching",
      skills: ["Expository Preaching", "Evangelism", "Revival Meetings"],
    },
    {
      number: "02",
      title: "Teaching & Discipleship",
      skills: ["Bible Study", "Mentorship", "Youth Ministry"],
    },
    {
      number: "03",
      title: "Pastoral Care",
      skills: ["Counselling", "Prayer Ministry", "Family Ministry"],
    },
    {
      number: "04",
      title: "Outreach",
      skills: ["Community Service", "Missions", "Church Planting"],
    },
  ];

  return (
    <section id="ministry" className="skills">
      <AnimatedSection>
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">MINISTRY</p>

          <h2>
            Areas of
            <br />
            ministry.
          </h2>

          <p className="skills-description">
            A reflection of the key areas through which
            Pastor Wesley Kayode Luther serves God's people
            and advances the Kingdom.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.number}>

              <div className="skill-number">
                {group.number}
              </div>

              <div className="skill-group-content">
                <h3>{group.title}</h3>

                <div className="skill-items">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
      </AnimatedSection>
    </section>
  );
}

export default Skills;