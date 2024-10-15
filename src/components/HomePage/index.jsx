import React from "react";
import Banner from "../Banner";
import Courses from "../courses";
import Pythonskills from "../Pythonskills";

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
      <Pythonskills />
    </div>
  );
}

export default HomePage;
