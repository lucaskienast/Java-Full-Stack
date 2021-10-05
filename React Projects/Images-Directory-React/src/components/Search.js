import React from 'react';

const Search = ({inputValue, setInputValue, handleSearch}) => {
    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Search for an image"
                autoFocus
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;