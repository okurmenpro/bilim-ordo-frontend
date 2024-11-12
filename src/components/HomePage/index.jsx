import React from "react";
import Banner from "../Banner";
import Courses from "../Courses";
import Companystatistics from "../Companystatistics";
import CardContainer from "../CardContainer";
import Card from "../Card";
import InfoSection from "../InfoSection";
import TeachSection from "../TeachSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <Companystatistics />
      <Courses />
      <CardContainer name="Учащиеся смотрят">
        <Card />
      </CardContainer>
      <TeachSection />
      <InfoSection />
    </div>
  );
}

export default HomePage;
