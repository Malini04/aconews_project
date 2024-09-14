import CategorySection from "../components/CategorySection";
import DateHeader from "../components/DateHeader";
import FeaturedStories from "../components/FeaturedStories";
import Header from "../components/Header";
import LatestNewsSection from "../components/LatestNewsSection";
import NewsSection from "../components/NewsSection";

const NewsPaper = () => (
  <>
    <DateHeader/>
    <Header />
    <CategorySection />
    <LatestNewsSection/>
    <NewsSection />
    <FeaturedStories />
  </>
);

export default NewsPaper;
