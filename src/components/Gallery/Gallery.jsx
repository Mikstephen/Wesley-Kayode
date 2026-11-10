import "./Gallery.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

// Add your images to public/gallery/ and list them here
const images = [
  { src: "/gallery/photo1.jpg", alt: "Ministry moment 1" },
  { src: "/gallery/photo2.jpg", alt: "Ministry moment 2" },
  { src: "/gallery/photo3.jpg", alt: "Ministry moment 3" },
  { src: "/gallery/photo4.jpg", alt: "Ministry moment 4" },
  { src: "/gallery/photo5.jpg", alt: "Ministry moment 5" },
  { src: "/gallery/photo6.jpg", alt: "Ministry moment 6" },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <AnimatedSection>
        <div className="gallery-container">

          <div className="gallery-heading">
            <p className="section-label">GALLERY</p>

            <h2>
              Moments in
              <br />
              ministry.
            </h2>

            <p className="gallery-description">
              A glimpse into the life and work of Pastor Wesley
              Kayode Luther across services, outreaches and events.
            </p>
          </div>

          <div className="gallery-grid">
            {images.map((img, i) => (
              <div className="gallery-item" key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}

export default Gallery;
