import React from 'react'
import Instructor from '../Instructor'
import { Outlet } from 'react-router'

function TeachLayout() {
  return (
    <div>
      <Instructor />
      <Outlet />
    </div>
  )
}

export default TeachLayout
