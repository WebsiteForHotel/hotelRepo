import React from "react";
import { Room } from "../data/data";
import styles from "./card.module.scss";

interface CardProps {
    data: Room;
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className={`${styles.card} ${data.isFeatured ? styles.featured : ''}`}>
            <div className={styles.cardCover}>
                <img src={data.coverImage.url} alt={data.name} />
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{data.name}</h2>
                <p className={styles.cardDescription}>{data.description}</p>
               
                <div className={styles.cardDetails}>
                    <span>Beds: {data.numberOfBeds}</span>
                    <span>{data.isBooked ? 'Booked' : 'Available'}</span>
                </div>
                {data.specialNote && <div className={styles.cardNote}>{data.specialNote}</div>}
                <a href={data.link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                    View More
                </a>
            </div>
        </div>
    );
};

export default Card;
