import "./About.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

function About() {
  return (
    <section id="about" className="about">
      <AnimatedSection>
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Serving God,
            <br />
            transforming lives.
          </h2>
        </div>

        <div className="about-content">
          <p className="about-intro">
            I'm Pastor Wesley Kayode Luther, a devoted minister of the Gospel
            with a passion for preaching, teaching, and discipleship.
          </p>

          <p>
            I am committed to helping people encounter God's word in a
            practical and life-changing way, through sermons, counselling,
            and community outreach.
          </p>

          <p>
            Over the years, I have led congregations, mentored young
            believers, and facilitated spiritual growth programmes across
            various communities.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">+500</span>
              <span className="about-stat-label">Sermons delivered</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">+10</span>
              <span className="about-stat-label">Years of ministry</span>
            </div>
          </div>

          <div className="about-details">

            <div className="about-detail">
              <span>01</span>
              <div>
                <h3>Preaching &amp; Teaching</h3>
                <p>
                  Delivering the Word of God with clarity,
                  depth and conviction.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>02</span>
              <div>
                <h3>Pastoral Counselling</h3>
                <p>
                  Guiding individuals and families through
                  life's challenges with biblical wisdom.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>03</span>
              <div>
                <h3>Community Outreach</h3>
                <p>
                  Reaching communities with the love of
                  Christ through service and evangelism.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      </AnimatedSection>
    </section>
  );
}

export default About;