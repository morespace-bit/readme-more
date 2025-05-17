import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const HomePage = () => {
  // function to fetch books

  const fetchBook = async () => {
    const data = await axios.get("http://localhost:3000/api/books");
    console.log(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default HomePage;
