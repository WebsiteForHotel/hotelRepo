import React from "react";

import { TFacility } from "../data/data";

import styles from "./card.module.scss";

interface CardProps {
    data: TFacility;
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>{data.img}</div>
            <h3 className={styles.card_title}>{data.title}</h3>
            <p className={styles.card_desc}>{data.desc}</p>
        </div>
    );
};

export default Card;
