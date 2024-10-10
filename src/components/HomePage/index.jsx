import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import TeachSection from '../TeachSection'


import Card from '../Card'
import PopularCategories from '../popularCategories';


function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <Card />
      <PopularCategories/>
      <TeachSection/>
    </div>
  )
}

export default HomePage;
