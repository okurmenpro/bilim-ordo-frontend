import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftProfile from '../LeftProfile'
import "./ProfileLayout.scss" 

function ProfileLayout() {
  return (
    <div className='profile-layout container'>
      <LeftProfile />
      <Outlet />
    </div>
  )
}

export default ProfileLayout