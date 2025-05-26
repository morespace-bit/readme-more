import { useState } from "react";

const CreatePage = () => {
  // function to add the book details to the backend

  const [book, setBook] = useState({});

  return (
    <>
      <div className="h-screen flex justify-center items-center w-full ">
        <form class="max-w-sm mx-auto w-full">
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Your Book name:
            </label>
            <input
              onChange={(e) => {
                setBook((pre) => ({ ...pre, bookName: e.target.value }));
              }}
              type="text"
              id="text"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="Harry potter"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Book Author:
            </label>
            <input
              type="text"
              id="author"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="bookPrice"
              class="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Book Price
            </label>
            <input
              type="number"
              id="number"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="bookPrice"
              class="block mb-2 text-xl font-medium text-gray-900 text-black"
            >
              Book Type:
            </label>
            <input
              type="number"
              id="number"
              class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              required
            />
          </div>
          <button
            type="submit"
            class="
            cursor-pointer
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create New Book{" "}
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePage;
