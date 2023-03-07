import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { chrome } from "../../assets";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
    navigate("/search");
  };

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Search Google or type a URL"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <MicIcon className="search__micIcon" id="voiceSearchButton" />
      </div>
      {
        !hideButtons ? (
          <div className="search__buttons">
        <div className="search__buttonsBox">
          <center>
            <img src={chrome} alt="" />
          </center>
          <p>Extensions</p>
        </div>
        <div className="search__buttonsBox">
          <center className="addIcon">
            <AddIcon />
          </center>
          <p>Add Shortcut</p>
        </div>
      </div>
        ) : (
          <div className="search__buttons search__buttonsHidden">
        <div className="search__buttonsBox">
          <center>
            <img src={chrome} alt="" />
          </center>
          <p>Extensions</p>
        </div>
        <div className="search__buttonsBox">
          <center className="addIcon">
            <AddIcon />
          </center>
          <p>Add Shortcut</p>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default Search;
