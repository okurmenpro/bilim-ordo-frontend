import React from "react";
import Banner from "../Banner";
import Companystatistics from "../Companystatistics";
import CardContainer from "../CardContainer";
import Card from "../Card";
import Categories from "../Categories";
import Become from "../Become";
import Topcourses from "../Topcourses";
import HomeReviews from "../HomeReviews";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Banner />
      <Companystatistics />
      <CardContainer name="Top Categories" text="Label"></CardContainer>
      <Categories />
      <CardContainer name="Top Courses">
        <NavLink to="/categoriespage" onClick={() => window.scrollTo(0, 0)}>
          Label
        </NavLink>
      </CardContainer>
      <Topcourses />
      <CardContainer name="Top Instructors">
        <NavLink to="/mentor" onClick={() => window.scrollTo(0, 0)}>
          Label
        </NavLink>
      </CardContainer>
      <Card />
      <HomeReviews />
      <Become />
    </div>
  );
}

export default HomePage;
