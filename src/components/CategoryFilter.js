import React from "react";

function CategoryFilter({categories, selectedCategory, setCategory}) {
  function handleClickedCategory(category) {
    setCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return(
          <button
          key={category}
          className={category=== selectedCategory ? "selected" : null}
          onClick={event => handleClickedCategory(category)}>
            {category}
          </button>
        )
      } )}
    </div>
  );
}

export default CategoryFilter;
