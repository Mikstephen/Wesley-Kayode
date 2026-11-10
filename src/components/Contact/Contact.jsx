import { useState } from "react";
import "./Contact.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";


function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");
  try {
    await emailjs.send(
      "service_988k4k5",
      "template_zbfem15",
      { from_name: form.name, from_email: form.email, message: form.message },
      "OMlm37bjooq6anWdU"
    );
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("EmailJS error:", err);
    setStatus("error");
  }
};


  return (
    <section id="contact" className="contact">
      <AnimatedSection>
      <div className="contact-container">

        <div className="contact-info">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's connect
            <br />
            &amp; pray.
          </h2>

          <p className="contact-description">
            Want to invite Pastor Wesley for a speaking engagement,
            request counselling, or simply connect? Reach out below.
          </p>

          <div className="contact-links">

            <a href="https://wa.me/2347014470895" target="_blank" rel="noreferrer">
              <FaWhatsapp /> (234) 701-447-0895
            </a>
            <a href="mailto:revivaltrainministry@gmail.com">
              <MdEmail /> revivaltrainministry@gmail.com
            </a>
            <a href="https://www.instagram.com/wesleykayode?exln=dW00MmRsa3RscmE5" target="_blank" rel="noreferrer">
              <FaInstagram /> Wesley Kayode Luther
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube /> Pastor Wesley Kayode
            </a>
            <a href="https://www.tiktok.com/@wesleykayode?_r=1&_t=ZS-9BGpX0AJUWL" target="_blank" rel="noreferrer">
              <FaTiktok /> Wesley Kayode Luther
            </a>
            <a href="https://www.facebook.com/share/14ycffJydGu/" target="_blank" rel="noreferrer">
              <FaFacebook /> Pastor Wesley Kayode
            </a>

          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Tell me about your request..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>

          {status === "success" && <p className="form-status success">Message sent!</p>}
          {status === "error" && <p className="form-status error">Something went wrong. Try again.</p>}

        </form>

      </div>
      </AnimatedSection>
    </section>
  );
}

export default Contact;