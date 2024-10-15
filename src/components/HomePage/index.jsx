import React from "react";
import Banner from "../Banner";
import Courses from "../courses";
import Card from "../Card";
import PopularCategories from "../PopularCategories";
import InfoSection from "../InfoSection";
import TeachSection from "../TeachSection";
import InfoSection from "../InfoSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <Card />
      <PopularCategories />
      <TeachSection />
      <InfoSection />
    </div>
  );
}

export default HomePage;
