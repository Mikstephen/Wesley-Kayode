import "./Projects.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

const sermons = [
  {
    title: "Walking in Faith",
    date: "June 1, 2025",
    scripture: "Hebrews 11:1",
    videoId: "hV-U2gnHtqs",
  },
  {
    title: "The Power of Prayer",
    date: "June 8, 2025",
    scripture: "Matthew 6:9-13",
    videoId: "0Xk-oouS_Uc",
  },
  {
    title: "Grace & Redemption",
    date: "June 15, 2025",
    scripture: "Ephesians 2:8-9",
    videoId: "9ADQdJajRUQ",
  },
  {
    title: "Living with Purpose",
    date: "June 22, 2025",
    scripture: "Jeremiah 29:11",
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
