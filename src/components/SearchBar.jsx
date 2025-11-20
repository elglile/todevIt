import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={boxRef} className="relative flex items-center m-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-[20px] h-[20px] z-1 rounded-full  text-gray-600  transition-all duration-300 hover:bg--600"
      >
        <FaSearch size={26} className="text-1-800" />
      </button>

<input
        type="text"
        placeholder="Search..."
        className={`absolute right-[-5px] h-[35px] px-4  font-mono  text-[14px] outline-none   bg-[#E5E9F0]  text-gray-500 rounded-[100px]  transition-all duration-500 ${
          open ? "w-[220px] opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
}

export default SearchBar;
