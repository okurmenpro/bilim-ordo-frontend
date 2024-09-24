import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterCom from '../components/Footer/FooterCom'

function Layout() {
  return (
    <div>
      <Outlet />
     <FooterCom />
    </div>
  )
}

export default Layout
