import "./SearchBarStyles.css";
import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export default function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  const handleNameChange = (event) => {
    setInput(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      toast.error("Write your request,please");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
