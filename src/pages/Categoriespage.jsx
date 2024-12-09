import React from "react";
import Ratingcategories from "../components/Ratingcategories";
import Topcoursescategories from "../components/Topcoursescategories";
import TopCourses from "../components/Topcourses";
import Card from "../components/Card";
import Categoriescontainer from "../components/Categoriescontainer";
function Categoriespage() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Ratingcategories />
        <div style={{ marginTop: "240px", marginLeft: "50px" }}>
          {/* <Topcoursescategories /> */}
        </div>
      </div>
      <div>
        <div style={{ marginTop: "80px" }}>
          <Categoriescontainer namer="Popular Mentors"></Categoriescontainer>
          <Card />
        </div>
        <div style={{ marginTop: "100px", marginBottom: "50px" }}>
          <Categoriescontainer namer="Featured Courses"></Categoriescontainer>
          <TopCourses />
        </div>
      </div>
    </div>
  );
}

export default Categoriespage;
