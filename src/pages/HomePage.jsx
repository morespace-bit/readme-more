import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [bookData, setBookData] = useState([]);
  // function to fetch books

  const fetchBook = async () => {
    const data = await axios.get("http://localhost:3000/api/books");
    console.log(data);
    console.log(data.data.datas);
    setBookData(data.data.datas);
  };

  const bookImg = ["book1", "book2", "book3"];

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center gap-20 mt-20 md:px-15">
        {bookData.map((book, index) => (
          <Card
            key={index}
            name={book.bookName}
            author={book.bookAuthor}
            price={book.bookPrice}
            genre={book.bookGenre}
            photo={bookImg[index]}
            id={book.id}
          />
        ))}
      </div>
    </>
  );
};
export default HomePage;
