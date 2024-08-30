import React from 'react'

import { TCasinoData } from '../data/data'

import styles from "./card.module.scss"

interface CardProps {
    data: TCasinoData;
}

const Card = ({ data }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={data.img} alt="casinoImg" />
            </div>
            <div>
                <h4 className={styles.card_title}>{data?.title}</h4>
                <p className={styles.card_desc}>{data?.desc}</p>
            </div>
        </div>
    )
}

export default Card