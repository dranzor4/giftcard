import React, { useState } from 'react'
import styles from "./BuySell.module.css"
import Button from '../Button/Button';
const BuySell = ({className}) => {
  const [buyForSelf, setBuyForSelf] = useState(true);
  const [giftToSomeone, setGiftToSomeone] = useState(false);

  const handleClickBuy = () => {
    setBuyForSelf(true);
    setGiftToSomeone(false);
  };
  const handleClickGift = () => {
    setGiftToSomeone(true);
    setBuyForSelf(false);
  };
  return (
    <div className={styles.buttonTabContainer}>
    <div className={styles.buttonContainer}>
    <Button
      className={buyForSelf ? styles.afterClick : styles.initial}
      handleClick={handleClickBuy}
    >
      Buy for self
    </Button>
    <Button
      className={giftToSomeone ? styles.afterClick : styles.initial}
      handleClick={handleClickGift}
    >
      Gift to Someone
    </Button>
    </div>
  </div>
  )
}

export default BuySell