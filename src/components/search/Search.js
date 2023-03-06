import React from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { chrome } from "../../assets";

const Search = () => {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" placeholder="Search Google or type a URL" />
        <MicIcon className="realbox-icon-button" />
      </div>
      <div className="search__buttons">
      <div className="search__buttonsBox">
     <center><img src={chrome} alt="" /></center>
    <p>Extensions</p>
      </div>
        <div className="search__buttonsBox">
          <center className="addIcon">
            <AddIcon/></center>
        <p>Add Shortcut</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
