import React, { useEffect, useState } from "react";
// import { LuPlusCircle } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import NoteCard from "./NoteCard";
import { Link } from "react-router";
import useAuth from "../context/useAuth";

const Search = () => {
  const {userId} = useAuth;
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/${userId}/note/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setNotes(data)
        setFilteredNotes(data)
      });
  }, []);


  const handleAdd = () => {
    setShow((prev) => !prev);
  }

  const handleSearch = (e) => {
    const userinput = e.target.value.toLocaleLowerCase();
    const filtered_notes = notes.filter(note => note.title.toLocaleLowerCase().includes(userinput));
    setFilteredNotes(filtered_notes)
  }


  return (
    <>
      <div className="flex-center relative">
        <div action="" className=" mt-10 my-10 flex  justify-between bg-red  search-box ">
          <input
            type="text"
            className="rounded-3xl border-gray-800  h-10 w-80 outline-none text-lg"
            placeholder="Search Notes"
            onChange={handleSearch}
          />
          <Link to={"/note"}>
            <IoIosAddCircleOutline  className="size-10 text-gray-800" />
          </Link>
        </div>
      </div>

      <div className="mt-2 notecard-wrapper flex gap-5 justify-center items-center flex-wrap">
        {filteredNotes.reverse().map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
        {filteredNotes.length === 0 && <p>No Notes Found</p>}
      </div>

    </>
  );
};

export default Search;
