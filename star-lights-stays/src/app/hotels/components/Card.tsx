import React from "react";
import { Room } from "../data/data";
import styles from "./card.module.scss";

interface CardProps {
    data: Room;
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className={`${styles.card} ${data.isFeatured ? styles.featured : ''}`}>
            <div className={styles.card_cover}>
                <img src='https://plus.unsplash.com/premium_photo-1676320514018-ec119b57dbce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={data.name} />
            </div>
            <div className={styles.card_content}>
                <h2 className={styles.card_title}>{data.name}</h2>
                <p className={styles.card_description}>{data.description}</p>
               
                <div className={styles.card_details}>
                
                </div>
                {data.specialNote && <div className={styles.card_note}>{data.specialNote}</div>}
                <a href={data.link} className={styles.card_link} target="_blank" rel="noopener noreferrer">
                    View More
                </a>
            </div>
        </div>
    );
};

export default Card;
