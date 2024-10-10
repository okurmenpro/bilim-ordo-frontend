import React from 'react'
import Banner from '../Banner'
import Courses from "../courses"
import ContainerCart from '../CardContainer'

import Card from '../Card'
import PopularCategories from '../popularCategories';


function HomePage() {
  return (
    <div>
      <Banner />
      <Courses />
      <ContainerCart/>
      <Card />
      <PopularCategories/>
    </div>
  )
}

export default HomePage;
