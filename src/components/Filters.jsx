const Filters = ({
  categories,
  selectedCategory,
  onCategorySelect,
  onClearFilters,
}) => {
  return (
    <div className="filters-con">
      <ul>
        {selectedCategory && (
          <li>
            <button className="clear-btn" onClick={onClearFilters}>
              Clear
            </button>
          </li>
        )}
        {categories.map((category) => (
          <li key={category}>
            <button
              className={selectedCategory === category ? "active" : ""}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
