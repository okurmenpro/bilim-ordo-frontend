import React from 'react'
import Banner from '../Banner'
import Companystatistics from "../Companystatistics"
import CardContainer from "../CardContainer";
import Card from "../Card";
import PopularCategories from "../PopularCategories/index";
import InfoSection from "../InfoSection";
import HomeReviews from "../HomeReviews";
import Categories from "../Categories";

function HomePage() {
  return (
    <div>
      <Banner />
      <Companystatistics />
      <Categories />
      <CardContainer name="Учащиеся смотрят"></CardContainer>
      <Card />
      <PopularCategories />
      <HomeReviews />
      <InfoSection />
    </div>
  );
}

export default HomePage;
