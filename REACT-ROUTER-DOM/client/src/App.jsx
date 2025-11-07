import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/" element={<h1>View Cart</h1>}></Route>
        <Route path="/" element={<h1>View Order</h1>}></Route>
        <Route path="/" element={<h1>Register Here</h1>}></Route>
        <Route path="/" element={<h1>Login Here</h1>}></Route>
        <Route path="/" element={<h1>404 Error Page</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App