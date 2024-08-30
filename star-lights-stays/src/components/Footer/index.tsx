import React from "react";

import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_card}>
        <h2>ADDRESS</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Assumenda deserunt velit voluptate aut vitae!</p>
        <p>Provident cum sit consectetur sequi rerum.</p>
        <p>Quibusdam maiores minima reprehenderit ea laborum?</p>
      </div>
      <div className={styles.footer_card}>
        <h2>CONTACT US</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Assumenda deserunt velit voluptate aut vitae!</p>
        <p>Provident cum sit consectetur sequi rerum.</p>
        <p>Quibusdam maiores minima reprehenderit ea laborum?</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Assumenda deserunt velit voluptate aut vitae!</p>

      </div>
      <div className={styles.footer_card}>
        <h2>18 +</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Assumenda deserunt velit voluptate aut vitae!</p>
        <p>Provident cum sit consectetur sequi rerum.</p>
        <p>Quibusdam maiores minima reprehenderit ea laborum?</p>
        <p>Provident cum sit consectetur sequi rerum.</p>
      </div>
    </footer>
  );
};

export default Footer;
