import "./Hero.css";
import photo from "../../assets/pastor.jpg"; // replace with pastor's photo

function Hero() {
  return (
    <section className="hero">

      {/* Portrait */}
      <div className="hero-photo-wrap">
        <img
          src={photo}
          alt="Pastor Wesley Kayode Luther"
          className="hero-photo"
        />
      </div>

      <div className="hero-inner">

        {/* Vertical sidebar */}
        <aside className="hero-sidebar">
          <span className="sidebar-role">
            Pastor &amp; Speaker
          </span>

          <div className="sidebar-line"></div>

          <span className="sidebar-year">
            2026
          </span>
        </aside>

        {/* Main content */}
        <div className="hero-body">

            {/* Main heading */}
          <div className="hero-heading">

            <h1 className="hero-hello">
              Hello
            </h1>

            <p className="hero-sub">
              — I'm Pastor Wesley Kayode Luther, a preacher, teacher &amp; servant of God
            </p>

          </div>

          {/* CTA */}
          <a href="#about" className="hero-scroll">
            Learn more ↓
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;