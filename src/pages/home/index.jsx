import SearchBy from "../../components/searchby";
// import Search from "../../components/searchbar/Search";
import Carousel from "../../components/carousel/Carousel";
import FadeCarousel from "../../components/carousel/FadeCarousel";
import Button from "../../components/Button/Button";
import styles from "./index.module.css";
import { useState } from "react";

const Home = () => {
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
    <div className={styles.home}>
      <SearchBy />
      {/* <Search /> */}
      <FadeCarousel />
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
      <Carousel name="Hot Deals" animationDelay={2500} />
      <Carousel name="Best Sellers" animationDelay={3000} />
      <Carousel name="Value Offers" animationDelay={3500} />
      <Button className={styles.filterButton}>Filters <img src="/images/filter.png" alt="filter"/></Button>
    </div>
  );
};
export default Home;
