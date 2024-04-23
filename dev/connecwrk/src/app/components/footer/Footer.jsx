import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.hideMob}>
        <div className="container">
          <div className={styles.footerLeft}>
            <a href="/">
              <img src="/logo.png" />
            </a>
            <p></p>
          </div>
          <div className={styles.footerMenu} style={{ marginTop: "9px" }}>
            <ul className={styles.foooterList}>
              <li>
                <a href="/privacy.html">Privacy</a>
              </li>
              <li>
                <a href="/terms.html">Terms</a>
              </li>
              <li>
                <a href="/about.html">About</a>
              </li>
              <li>
                <a href="/contact-us.html">Contact Us</a>
              </li>
              <li>
                <a href="/faq.html">FAQ's</a>
              </li>
              <li>
                <a href="/developer.html">Developer</a>
              </li>
            </ul>
            <ul className={styles.foooterList} style={{ display: "none" }}>
              <li>
                <a href="/companies.html">Corporate Connect</a>
              </li>
              <li>
                <a href="/articles-and-trivia.html">Article and Trivia</a>
              </li>
              <li>
                <a href="/events.html">Events</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <div className="container">
          © The copyright is OMSR Media Pvt. Ltd | All rights reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
