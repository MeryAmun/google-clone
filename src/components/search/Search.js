import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { chrome } from "../../assets";
import { useStateDataValue } from '../../context/DataLayerContext';
import * as actionType from '../../constants/actionTypes'

const Search = ({ hideButtons = false }) => {
const [{}, dispatch] = useStateDataValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type:actionType.SET_SEARCH_TERM,
      term:input
    })
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
        <Button variant="outlined" type='submit'>Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
        ) : (
          <div className="search__buttons search__buttonsHidden">
        <Button variant="outlined" type='submit'>Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
        )
      }
    </div>
  );
};

export default Search;
