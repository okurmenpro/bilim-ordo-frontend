import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import CartContainer from '../CardContainer'
import Card from "../Card";
import PopularCategories from "../PopularCategories";
import InfoSection from "../InfoSection";
import TeachSection from "../TeachSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <ContainerCart/>
      <Card />
      <PopularCategories />
      <TeachSection />
      <InfoSection />
    </div>
  );
}

export default HomePage;
