import React, { useState } from 'react';

const SearchBar = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    searchFor(searchTerm);
  };

  const handleChange = evt => {
    setSearchTerm(evt.target.value);
  };


  return (
    <div className="SearchBar mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="input-group flex-grow-1">
          <input className="form-control form-control-lg"
            name="search"
            type="text"
            placeholder="Search.."
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="input-group-append input-group-btn">
            <button className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default SearchBar;