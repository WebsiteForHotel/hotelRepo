import Card from './components/Card';
import { Room } from './data/data';
import {mockRooms } from './data/data'
import styles from "./components/card.module.scss";

function Rooms() {
  return (
    // <div className="container mx-auto pt-10">
    //   <div className="flex mt-20 justify-evenly flex-wrap">
      <div className={styles.container}>
            <div className={styles.flex}>
      {mockRooms &&
          mockRooms.length > 0 &&
          mockRooms.map((item: Room) => <Card data={item} />)}
      </div>
    </div>
  );
}

export default Rooms;
