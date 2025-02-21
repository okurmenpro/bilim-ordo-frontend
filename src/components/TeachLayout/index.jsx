import React from 'react'
import Instructor from '../Instructor'
import { Outlet } from 'react-router'
import TeacHeader from '../TeacHeader'

function TeachLayout() {
  return (
    <div>
      <Instructor />
      <TeacHeader />
      <Outlet />
    </div>
  )
}

export default TeachLayout
