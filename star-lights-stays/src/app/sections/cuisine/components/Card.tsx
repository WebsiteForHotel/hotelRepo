import React from "react";
import { TCuisineItem } from "../data/data";
import styles from "./card.module.scss";

type Tcard = {
  data: TCuisineItem;
};

const Card = ({ data }: Tcard) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={data?.img} alt="img" />
      </div>
      <div className={styles.card_detail}>
        <h5 className={styles.card_title}>{data?.title}</h5>
        <p className={styles.card_desc}>{data?.desc}</p>
      </div>
      <div className={styles.card_bottom}>
        <h5 className={styles.card_bottom_title}>{data.bottomTitle}</h5>
        <p className={styles.card_bottom_desc}>{data.bottomDesc}</p>
      </div>
    </div>
  );
};

export default Card;
