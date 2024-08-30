import React from 'react'

import Card from './components/Card';
import { dataCasino } from './data/data';

import styles from "./casino.module.scss";

const Casino = () => {
    return (
        <div className={styles.casino} id="casino">
            <div className={styles.casino_text}>
                <h3 className={styles.casino_text_title}>Maestral Casino</h3>
                <p className={styles.casino_text_desc}>
                    Suchen Sie nach Spaß und Aufregung?
                    Es gibt keinen Grund, woanders hinzugehen, denn im Hotel befindet sich das beste Casino Montenegros.
                </p>
            </div>
            <div className={styles.casino_wrapper}>
                <div className={styles.casino_wrapper_cards}>
                    {dataCasino &&
                        dataCasino.length > 0 &&
                        dataCasino.map((item) => (
                            item.id < 4 &&
                            <Card data={item} key={item.id} />

                        ))}
                </div>
                <div className={styles.casino_wrapper_img}>
                    <img src="/images/casinoImages/promo.png" alt="casinoBanner" />
                </div>
                <div className={styles.casino_wrapper_cards}>

                    {dataCasino &&
                        dataCasino.length > 0 &&
                        dataCasino.map((item) => (
                            item.id >= 4 &&
                            <Card data={item} key={item.id} />

                        ))}
                </div>
            </div>
        </div>
    )
}

export default Casino