import React from "react";
import "./SearchBar.css";

type Props = {
  handleInput: (text: string) => void;
  handleAdd: () => any;
};
const SearchBar: React.FC<Props> = ({ handleInput, handleAdd }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Enter the task here"
        onChange={(e) => handleInput(e.target.value)}
      ></input>
      <button onClick={() => handleAdd()} className="search__button">
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
