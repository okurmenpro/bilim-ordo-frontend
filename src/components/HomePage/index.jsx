import React from "react";
import Banner from "../Banner";
import Companystatistics from "../Companystatistics";
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
      <CardContainer name="Top Categories" text="Label"></CardContainer>
      <Categories />
      <CardContainer name="Top Courses" text="Label"></CardContainer>
      <Topcourses />
      <CardContainer name="Top Instructors" text="Label"></CardContainer>
      <Card />
      <Become />
    </div>
  );
}

export default HomePage;
