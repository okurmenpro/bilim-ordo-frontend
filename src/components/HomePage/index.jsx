import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"


import Card from '../Card'
import PopularCategories from '../popularCategories';


function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <Card />
      <PopularCategories/>
    </div>
  )
}

export default HomePage;
