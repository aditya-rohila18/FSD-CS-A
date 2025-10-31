import React from 'react'
import Book from './component/book'
import './App.css'
import Header from './component/header'

const App = () => {
  const data = [
    {image: "https://m.media-amazon.com/images/I/31WIiECCtxL._AC_UF1000,1000_QL80_.jpg", title:"Physics",price: 765},
    {image: "https://m.media-amazon.com/images/I/71EbahdYuWL._AC_UF1000,1000_QL80_.jpg", title:"Chemistry",price: 415},
    {image: "https://m.media-amazon.com/images/I/918O3XZAW9L.jpg", title:"Maths",price: 595}
  ]
    return (
    <div>
      <Header>
      <div className='app'>
        {
          data.map((b,i)=>(
            <Book key={i} book={b}/>
          ))
        }
      </div>
      </Header>
    </div>
  )
}

export default App
