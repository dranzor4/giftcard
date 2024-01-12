import React, { useState } from 'react';
import Button from '../Button';
import styles from "./Redeemable.module.css"
const Redeemable = () => {
    const[online,setOnline]=useState(true);
    const[offline,setOffline]=useState(false);
  return (
    <div className={styles.container}>
    <div className={styles.containerHeader}>Redeemable :</div>
    <Button className={online ? styles.online : styles.offline }>{online?<img src="/Images/check-circle-fill.svg" alt="check"/>:<img src="/Images/x-circle-fill.svg" alt="cross"/>}Online</Button>
    <Button className={offline ? styles.online : styles.offline}>{offline?<img src="/Images/check-circle-fill.svg" alt="check"/>:<img src="/Images/x-circle-fill.svg" alt="cross"/>}Offline</Button>
    </div>
  )
}

export default Redeemable