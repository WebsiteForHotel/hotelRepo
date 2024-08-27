import React from "react";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.home_description}>
          <h1>DISCOVER YOUR PERFECT GETAWAY</h1>
          <p>
            Embark on a journey with StarLightsStays, where our curated hotel reviews unveil luxurious retreats and uncover hidden treasures around the world.
          </p>
        </div>
        <div className={styles.home_form}>
          <div className={styles.home_form_banner}>
            <iframe
              src="https://www.booking.com/prelanding_product.html?responsive=true&amp;languagecode=default&amp;widget_id=cb690bcb-aa8b-4875-91dd-7b00134a2dca&amp;aid=2265164"
              scrolling="no"
              style={{
                border: "0px",
                position: "absolute",
                top: "0px",
                left: "50%",
                height: "100%",
                width: "100%",
                zIndex: 9999,
                transform: "translateX(-50%)",
                transition: "left 0.5s ease, transform 0.5s ease",
                paddingTop: "20px"
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
