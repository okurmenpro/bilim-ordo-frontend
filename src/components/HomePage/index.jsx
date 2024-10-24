import React from "react";
import Banner from "../Banner";
import Courses from "../courses";
import Courseskills from "../Courseskills";

import Card from "../Card";
import PopularCategories from "../PopularCategories";
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
       <Courseskills />
    </div>
  );
}

export default HomePage;
