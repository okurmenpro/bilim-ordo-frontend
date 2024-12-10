import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftProfile from '../LeftProfile'
import Profilemessageteacher from '../Profile-page-teacher'

function ProfileLayout() {
  return (
    <div className='container'>
      <LeftProfile />
      <Outlet />
      <Profilemessageteacher />
    </div>
  )
}

export default ProfileLayout