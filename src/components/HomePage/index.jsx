import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import CardContainer from '../CardContainer'
import Card from "../Card";
import PopularCategories from "../PopularCategories";
import TeachSection from "../TeachSection";
import InfoSection from "../InfoSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <CardContainer name="Учащиеся смотрят">
        <Card />
      </CardContainer>
      <PopularCategories/>
      <TeachSection />
      <InfoSection />
    </div>
  );
}

export default HomePage;
