import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import CartContainer from '../CardContainer'
import Card from "../Card";
import PopularCategories from "../PopularCategories";
import TeachSection from "../TeachSection";
import InfoSection from "../InfoSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <CartContainer name="Учащиеся смотрят">
      <Card />
      </CartContainer>
      <PopularCategories/>
      <TeachSection />
      <InfoSection />
    </div>
  );
}

export default HomePage;
