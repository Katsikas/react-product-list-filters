const Sidenav = ({ showNav, categories, onSelectCategory }) => {
  return (
    <div className={showNav ? "sidenav active" : "sidenav"}>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              className="category-btn"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
