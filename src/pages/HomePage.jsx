import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import PopularCategories from '../components/popularCategories'



function HomePage() {
  return (
    <div>
      <Banner />
      <Card />
      <PopularCategories/>
    </div>
  )
}

export default HomePage;
