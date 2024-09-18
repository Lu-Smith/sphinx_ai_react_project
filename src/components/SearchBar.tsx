import React from 'react';

interface SearchBarProps {
  onSearch: (searchStudents: string) => void;
  foundStudents?: {
    name: string;
    form: string;
    send: boolean;
  }[] | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, foundStudents }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search for pupils..."
        onChange={handleSearch}
      />
     {foundStudents && foundStudents.length > 0 && (
        <div className="SearchResults">
          {foundStudents.map((student, index) => (
            <p key={index}>
              Found: {student.name}, Form: {student.form}, SEND: {student.send ? 'Yes' : 'No'}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;