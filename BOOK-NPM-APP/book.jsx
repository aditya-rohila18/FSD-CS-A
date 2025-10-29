import './app.css';

function Book({ id, title, price, image }){
    const imgSrc = image || "https://m.media-amazon.com/images/I/31WIiECCtxL._AC_UF1000,1000_QL80_.jpg";
    const bookTitle = title || "Physics";
    const bookPrice = price || "₹385/-";
    return(
        <div className='card'>
            <img src={imgSrc} alt={bookTitle + " cover"} />
            <h3>Title: {bookTitle}</h3>
            <h4>Price: {bookPrice}</h4>
            <button>Add To Cart</button>
        </div>
    );
}

export default Book;