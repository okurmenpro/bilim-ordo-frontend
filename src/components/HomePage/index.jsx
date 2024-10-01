import React from 'react'
import Banner from '../Banner'
import Header from '../Header'
import Courses from "../courses"


import Card from '../Card'

function HomePage() {
  return (
    <div>
      <Banner />

      <Courses />
      <Footer />

      <Card />

    </div>
  )
}

export default HomePage;
