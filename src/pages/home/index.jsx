import SearchBy from "../../components/searchby";
import Search from "../../components/searchbar/Search";
import Carousel from "../../components/carousel/Carousel";
import FadeCarousel from "../../components/carousel/FadeCarousel";
import Button from "../../components/Button/Button";
import styles from "./index.module.css";
import ButtonTab from "../../components/ButtonTab/ButtonTab";
import { buySellButtonData } from "../../utils/constants/constants";

const Home = () => {
  return (
    <div className={styles.home}>
      <SearchBy />
      <Search />
      <FadeCarousel />
      <ButtonTab data={buySellButtonData}/>
      <Carousel name="Hot Deals" animationDelay={2500} />
      <Carousel name="Best Sellers" animationDelay={3000} />
      <Carousel name="Value Offers" animationDelay={3500} />
      <Button className={styles.filterButton}>Filters <img src="/images/filter.png" alt="filter"/></Button>
    </div>
  );
};
export default Home;
