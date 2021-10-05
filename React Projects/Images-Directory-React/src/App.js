import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import './App.css';

const App = () => {

  const API_KEY = "23670498-b95cf5117c37d6ec5c9a3cf2e";
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  
  const handleSearch = event => {
      event.preventDefault();
      setSearch(inputValue);
      setInputValue("");
  };

  const newImages = (direction) => {
    if (direction === "next") {
      setCurrentPage(prevCurrent => prevCurrent + 1);
    }
    else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage(prevCurrent => prevCurrent - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`)
    .then(res => res.json())
    .then(data => setImages(data.hits));
  }, [search, currentPage]);

  return (
    <div className="App">
      <Hero 
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch}
        images={images}
        newImages={newImages}
      />
    </div>
  );
}

export default App;
