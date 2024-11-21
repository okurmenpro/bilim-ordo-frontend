import React from "react";
import Banner from "../Banner";
import Courses from "../Courses";
import Companystatistics from "../Companystatistics";
import CardContainer from "../CardContainer";
import Card from "../Card";
import PopularCategories from "../PopularCategories/index";
import InfoSection from "../InfoSection";
import TeachSection from "../TeachSection";
import Categories from "../Categories";

function HomePage() {
  return (
    <div>
      <Banner />
      <Companystatistics />
      <Categories />
      <Courses />
      <CardContainer name="Учащиеся смотрят"></CardContainer>
      <Card />
      <PopularCategories />
      <TeachSection />
      <InfoSection />
    </div>
  );
}

export default HomePage;
