

import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import Companystatistics from "../Companystatistics"
import CardContainer from '../CardContainer'
import Card from "../Card";
import PopularCategories from '../PopularCategories';
import PopularCategories from "../popularCategories";
import InfoSection from "../InfoSection";
import TeachSection from "../TeachSection";
import Programmingexercises from "../Programmingexercises"

function HomePage() {
  return (
    <div>
      <Banner />
      <Companystatistics />
      <Courses />
      <CardContainer name="Учащиеся смотрят">
        <Card />
      </CardContainer>
      <PopularCategories />
      <Programmingexercises />
      <TeachSection />
      <InfoSection />
    </div>
  );
}

export default HomePage;
