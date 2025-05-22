import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const SinglePage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchOneBook = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/books/${id}`);
      console.log(res.data.data);
      setData(res.data.data);
    } catch (err) {
      console.error("Failed to fetch book:", err);
      setError("Failed to fetch book.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOneBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const bookImg = ["book3"]; // Use a valid path or asset

  return (
    <>
      <Navbar />
      <Card
        key={data.id}
        name={data.bookName}
        author={data.bookAuthor}
        price={data.bookPrice}
        genre={data.bookGenre}
        photo="book3" // Customize or fetch from `data` if available
        id={data.id}
      />
    </>
  );
};

export default SinglePage;
