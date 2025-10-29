import './App.css';

function Book(){
    return(
        <div className='card'>
        <img src="https://m.media-amazon.com/images/I/31WIiECCtxL._AC_UF1000,1000_QL80_.jpg" width="200" height="200" alt="Book Image"/>
        <h3>Title: Physics</h3>
        <h4>Price: ₹385/-</h4>
        <button>Add To Cart</button>        
        </div>
    );
}
export default Book;