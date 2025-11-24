import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AdminNavbar from '../components/AdminNavbar'

const AdminDashboard = () => {
  return (
    <div>
<Header/>
<AdminNavbar/>
<div style={{height:'81vh',padding: '10px', margin: '10px'}}>
<Outlet/>
</div>

<Footer/>
    </div>
  )
}

export default AdminDashboard