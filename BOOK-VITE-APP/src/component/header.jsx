import React from 'react'
import './header.css'

const Header = ({ children }) => {
  return (
    <div>
      <div className='header'>
        <h1 style={{margin:0, padding: '1rem 0', textAlign: 'center'}}>BOOK STORE</h1>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Header