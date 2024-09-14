// pages/index.js

import BreakingNews from "../components/BreakingNews";
import CategorySection from "../components/CategorySection";
import DailyFeed from "../components/DailyFeed";
import DateHeader from "../components/DateHeader";
import FeaturedStories from "../components/FeaturedStories";
import Header from "../components/Header";
import LatestNewsSection from "../components/LatestNewsSection";
import NewsSection from "../components/NewsSection";



const ArticlePage = () => (
  <>
    <DateHeader/>
    <Header />
    <CategorySection />
    <LatestNewsSection/>
    <NewsSection />
    <FeaturedStories />
  </>
);

export default ArticlePage;
