import React from 'react';

interface SearchBarProps {
  onSearch: (searchStudents: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search for pupils or forms..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;