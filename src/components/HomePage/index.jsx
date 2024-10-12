import React from "react";
import Banner from "../Banner";
import Courses from "../courses";

import Card from "../Card";
import PopularCategories from "../popularCategories";
import InfoSection from "../InfoSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <Card />
      <PopularCategories />
      <InfoSection />
    </div>
  );
}

export default HomePage;
