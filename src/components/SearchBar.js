import React from "react";

function SearchBar({orderBy, onChangeOrder, filterBy, onChangeFilter}) {
  // handles the sorting/ordering alphabetically or by price
  function handleOrderChange (event) {
    onChangeOrder(event.target.value)
  };
// handles the filtering options
  function handleFilterChange (event) {
    onChangeFilter(event.target.value)
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={orderBy === "Alphabetically"}
          onChange={handleOrderChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={orderBy === "Price"}
          onChange={handleOrderChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filterBy}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
