import React from 'react'
import Banner from '../Banner'
import Card from '../Card'
import PopularCategories from '../popularCategories/PopularCategories';

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
