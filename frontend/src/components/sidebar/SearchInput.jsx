import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState();
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 char long.");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found...");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full "
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
