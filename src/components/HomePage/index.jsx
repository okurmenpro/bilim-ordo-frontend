import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import Card from '../Card'
import PopularCategories from '../popularCategories';
import Request from '../Request/Request';

function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <Card />
      <PopularCategories />
      <Request />
    </div>
  )
}

export default HomePage;
