import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

const AdminLayouts = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <SideBar/>

      <div className='flex-1 flex flex-col'>
        <Navbar/>

        <main className='p-6 overflow-y-auto'>
            <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default AdminLayouts
