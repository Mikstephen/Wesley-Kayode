import { FaWhatsapp, FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              Wesley<span>.</span>
            </a>

            <p>
              Pastor, Preacher &amp; Teacher of the Word
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#sermons">Sermons</a>
            <a href="#ministry">Ministry</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
          
            <a href="mailto:revivaltrainministry@gmail.com">
              <MdEmail /> 
            </a>
            <a href="https://www.instagram.com/wesleykayode?exln=dW00MmRsa3RscmE5" target="_blank" rel="noreferrer">
              <FaInstagram /> 
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube /> 
            </a>
            <a href="https://www.tiktok.com/@wesleykayode?_r=1&_t=ZS-9BGpX0AJUWL" target="_blank" rel="noreferrer">
              <FaTiktok /> 
            </a>
            <a href="https://www.facebook.com/share/14ycffJydGu/" target="_blank" rel="noreferrer">
              <FaFacebook /> 
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Pastor Wesley Kayode Luther. All rights reserved.
          </p>

          <a href="#" className="back-to-top">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;