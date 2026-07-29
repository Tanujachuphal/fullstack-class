function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search Products..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default SearchBar;