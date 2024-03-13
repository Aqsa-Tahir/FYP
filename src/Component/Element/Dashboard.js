import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
    
  

    <div className="flex">
      <aside className="relative bg-pink-200 bg-sidebar h-screen w-1/6 hidden sm:block shadow-xl">
        <nav className="text-black text-base font-semibold pt-3">
          <Link to="order" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3" />
            Order
          </Link>
          <Link to="hotdeals" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-sticky-note mr-3" />
            HotDeals
          </Link>
          <Link to="topsellings" className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-table mr-3" />
            TopSellings
          </Link>
          
          {/* ... other links */}
        </nav>
      </aside>
      
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
    </>

  )
}

export default Dashboard