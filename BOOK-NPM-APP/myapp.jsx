import Book from "./book.jsx";

function MyApp() {
  const books = [
    { id: 1, title: "The Alchemist", price: "₹199", image: "https://m.media-amazon.com/images/I/617lxveUjYL.jpg" },
    { id: 2, title: "To Kill a Mockingbird", price: "₹299", image: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg" },
    { id: 3, title: "1984", price: "₹249", image: "https://m.media-amazon.com/images/I/71wANojhEKL._AC_UF1000,1000_QL80_.jpg" }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Book Store</h1>
      <div className="booklist">
        {books.map((b) => (
          <Book key={b.id} {...b} />
        ))}
      </div>
    </div>
  );
}

export default MyApp;