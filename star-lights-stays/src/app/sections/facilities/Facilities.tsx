import React from "react";

import Card from "./components/Card";
import { dataFacilities } from "./data/data";
import styles from "../facilities/facilties.module.scss";

const Facilities = () => {
  return (
    <div className={styles.facilities} id="facilites">
      <div className={styles.facilities_text}>
        <h3 className={styles.facilities_text_title}>Hotel Facilities</h3>
        <p className={styles.facilities_text_desc}>
          A luxury, contemporary, and modern Resort & Casino Maestral 5* is
          situated in a unique, attractive location, at the very heart of the
          Mediterranean.
        </p>
      </div>
      <div className={styles.facilities_wrapper}>
        {dataFacilities &&
          dataFacilities.length > 0 &&
          dataFacilities.map((item) => <Card data={item} />)}
      </div>
    </div>
  );
};

export default Facilities;
