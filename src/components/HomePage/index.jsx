import React from "react";
import Footer from "../Footer";
import Banner from "../Banner";
import Header from "../Header";
// import Course from "../Course/Course";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
      {/* <Course
        image="https://img-c.udemycdn.com/course/480x270/6032160_2119_2.jpg"
        name="Курс по WordPress - с нуля до результата!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, assumenda. r sit amet consectetur adipisicing elit. Vero, assumenda.  Vero, assumenda."
        month="Lorem ipsum dolor sit"
        price="54,87"
      /> */}
    </div>
  );
}

export default HomePage;
