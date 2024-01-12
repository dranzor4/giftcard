import SearchBy from "../../components/searchby";
import Search from "../../components/searchbar/Search";
import LinkCarousel from "../../components/carousel/LinkCarousel";
import Carousel from "../../components/carousel/Carousel"
import FadeCarousel from "../../components/carousel/FadeCarousel";
import Button from "../../components/Button";
import "./home.css";
import ButtonTab from "../../components/ButtonTab";
import { buySellButtonData } from "../../utils/constants/constants";
import { cardData } from "../../utils/constants/constants";

const Home = () => {
  return (
    <div className="home">
      <SearchBy />
      {/* <Search /> */}
      <FadeCarousel />
      <div className="buttonTab">
      <ButtonTab data={buySellButtonData} defaultSelected={buySellButtonData[0]?.id}/>
      </div>
      <LinkCarousel name="Hot Deals" animationDelay={2500} />
      <LinkCarousel name="Best Sellers" animationDelay={3000} />
      <LinkCarousel name="Value Offers" animationDelay={3500} />
      {/* <Carousel cardData={cardData}/> */}
      <Button className="filterButton">Filters <img src="/images/filter.png" alt="filter"/></Button>
    </div>
  );
};
export default Home;
