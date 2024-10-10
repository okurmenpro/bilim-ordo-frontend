import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import Companystatistics from "../Companystatistics"

import Card from '../Card'
import PopularCategories from '../popularCategories';


function HomePage() {
  return (
    <div>
      <Banner />
      <Companystatistics />
      <Courses />
      <Card />
      <PopularCategories/>
    </div>
  )
}

export default HomePage;
