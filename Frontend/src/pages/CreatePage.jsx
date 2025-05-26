import { useState } from "react";
import axios from "axios";

const CreatePage = () => {
  // function to add the book details to the backend

  const [book, setBook] = useState({});

  // function to upload the book data to the
  async function submitData() {
    console.log(book);
    const res = await axios.post("http://localhost:3000/api/books", book);
    setBook({
      bookAuthor: "",
      bookPrice: "",
      bookGenere: "",
      bookName: "",
    });
    if (res.status === 200) {
      console.log("The data posting was success full");
    } else {
      console.log("Error posting the data");
    }
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center w-full ">
        <form className="max-w-sm mx-auto w-full">
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Your Book name:
            </label>
            <input
              value={book?.bookName}
              onChange={(e) => {
                setBook((pre) => ({ ...pre, bookName: e.target.value }));
              }}
              type="text"
              id="text"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="Harry potter"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Book Author:
            </label>
            <input
              value={book?.bookAuthor}
              onChange={(e) => {
                setBook((pre) => ({ ...pre, bookAuthor: e.target.value }));
              }}
              type="text"
              id="author"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="bookPrice"
              className="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Book Price
            </label>
            <input
              value={book?.bookPrice}
              onChange={(e) => {
                setBook((pre) => ({ ...pre, bookPrice: e.target.value }));
              }}
              type="number"
              id="number"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="bookPrice"
              className="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Book Type:
            </label>
            <input
              value={book?.bookGenere}
              onChange={(e) => {
                setBook((pre) => ({ ...pre, bookGenere: e.target.value }));
              }}
              type="text"
              id="text"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              required
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              submitData();
            }}
            type="submit"
            className="
            cursor-pointer
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create New Book
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePage;
