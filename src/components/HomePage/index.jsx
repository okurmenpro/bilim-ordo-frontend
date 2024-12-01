import React from 'react'
import Banner from '../Banner'
import Companystatistics from "../Companystatistics"
import CardContainer from "../CardContainer";
import Card from "../Card";
import Categories from "../Categories";
import Become from "../Become";
import Topcourses from "../Topcourses";

function HomePage() {
  return (
    <div>
      <Banner />
      <Companystatistics />
      <Categories />
      <Topcourses />
      <CardContainer name="Учащиеся смотрят"></CardContainer>
      <Card />
      <Become />
    </div>
  );
}

export default HomePage;
