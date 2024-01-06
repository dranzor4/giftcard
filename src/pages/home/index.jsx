import SearchBy from "../../components/searchby";
import Search from "../../components/searchbar/Search";
import Carousel from "../../components/carousel/Carousel";
import FadeCarousel from "../../components/carousel/FadeCarousel";
import Button from "../../components/Button/Button";
import styles from "./index.module.css"
import { useState } from "react";

const Home = () => {
  const[buyForSelf,setBuyForSelf]=useState(true);
  const[giftToSomeone,setGiftToSomeone]=useState(false);

  const handleClickBuy=()=>{
    setBuyForSelf(true);
    setGiftToSomeone(false);
  }
  const handleClickGift=()=>{
    setGiftToSomeone(true);
    setBuyForSelf(false);
    console.log("gift")
  }
  return (
    <div>
      <SearchBy />
      <Search />
      <FadeCarousel />
      <div className={styles.buttonTabContainer}>
      <Button className={buyForSelf ? styles.afterClick : styles.initial} handleClick={handleClickBuy}>Buy for self</Button>
      <Button className={giftToSomeone ? styles.afterClick : styles.initial} handleClick={handleClickGift}>Gift to Someone</Button>
      </div>
      <Carousel />
    </div>
  );
};
export default Home;
