import "./Projects.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

const sermons = [
  {
    title: "THE REPAIRERS OF THE BREACH",
    date: "Oct 17, 2026",
    videoId: "hV-U2gnHtqs",
  },
  {
    title: "SONG OF YAHWEH",
    date: "Sep 3, 2026",
    videoId: "0Xk-oouS_Uc",
  },
  {
    title: "SET US ON FIRE",
    date: "Aug 26, 2026",
    videoId: "9ADQdJajRUQ",
  },
  {
    title: "CHANT OF BREAKTHROUGH",
    date: "Sep 1, 2026",
    videoId: "kPlqQCRQp4s",
  },
];

function Projects() {
  return (
    <section id="sermons" className="projects">
      <AnimatedSection>
        <div className="projects-container">

          <div className="projects-header">
            <div>
              <p className="section-label">SERMONS</p>
              <h2>
                Watch &amp;
                <br />
                be blessed.
              </h2>
            </div>

            <p className="projects-intro">
              Ministrations by Pastor Wesley Kayode Luther.
              Watch, share and be transformed by the Word of God.
            </p>
          </div>

          <div className="sermons-grid">
            {sermons.map((sermon, index) => (
              <article
                className="sermon-card"
                key={sermon.title}
                style={{ "--delay": `${index * 0.15}s` }}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="sermon-thumbnail"
                >
                  <img
                    src={`https://img.youtube.com/vi/${sermon.videoId}/hqdefault.jpg`}
                    alt={sermon.title}
                    loading="lazy"
                  />
                  <span className="sermon-play">▶</span>
                </a>

                <div className="sermon-info">
                  <div className="sermon-meta">
                    <span className="sermon-scripture">{sermon.scripture}</span>
                    <span className="sermon-date">{sermon.date}</span>
                  </div>
                  <h3>{sermon.title}</h3>
                </div>
              </article>
            ))}
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}

export default Projects;
