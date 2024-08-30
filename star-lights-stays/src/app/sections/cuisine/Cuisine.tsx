import React from "react";

import Card from "./components/Card";
import { dataCuisine } from "./data/data";

import styles from "./cuisine.module.scss";

const Cuisine = () => {
    return (
        <div style={{ width: "100%" }}>
            <hr className={styles.hr} />
            <div className={styles.cuisine} id="Cuisine">
                <div className={styles.cuisine_text}>
                    <h3 className={styles.cuisine_text_title}>
                        Appreciate our haute cuisine
                    </h3>
                    <p className={styles.cuisine_text_desc}>
                        Our guests can enjoy in rich offer of restaurants and bars that make
                        Maestral a luxury destination for dining.
                    </p>
                </div>
                <div className={styles.cuisine_wrapper}>
                    {dataCuisine &&
                        dataCuisine.length > 0 &&
                        dataCuisine.map(
                            (item) => <Card data={item} key={item.id} />
                        )}
                </div>
            </div>
        </div>
    );
};

export default Cuisine;
