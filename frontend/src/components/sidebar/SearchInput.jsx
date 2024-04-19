import React from "react";
import { ImSearch } from "react-icons/im";

const SearchInput = () => {
  return (
    <form>
      <input
        type="text"
        className="input input-bordered rounded-full "
        placeholder="Search..."
      />
      <button
        type="submit"
        className="btn rounded-full bg-purple-500 text-white"
      >
        <ImSearch className="text-lg" />
      </button>
    </form>
  );
};

export default SearchInput;

// starting code for this file

// import React from "react";
// import { ImSearch } from "react-icons/im";

// const SearchInput = () => {
//   return (
//     <form>
//       <input
//         type="text"
//         className="input input-bordered rounded-full "
//         placeholder="Search..."
//       />
//       <button
//         type="submit"
//         className="btn rounded-full bg-purple-500 text-white"
//       >
//         <ImSearch className="text-lg" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
