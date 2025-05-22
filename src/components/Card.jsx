import { Link } from "react-router-dom";
import axios from "axios";

const Card = ({ name, price, author, genre, photo, id }) => {
  // function to delete

  async function remove(id) {
    await axios.delete(`http://localhost:3000/api/books/${id}`);
  }

  return (
    <>
      {/* the main container */}

      <div className="flex flex-col max-w-full ">
        <Link to={`/single/${id}`}>
          {/* the image */}
          <img src={`/${photo}.jpeg`} alt="" className="w-100" />
          <p className="uppercase text-xl px-4 tracking-widest text-gray-500 font-thin mt-2">
            {author}
          </p>
          <p className="capitalize px-4 mt-2 text-2xl font-serif">{name}</p>
        </Link>
        <p className="px-4 mt-2"> Rs{price}</p>
        <button
          className="bg-black text-white p-2 cursor-pointer"
          onClick={() => {
            remove(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Card;
