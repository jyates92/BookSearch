import React, { useState } from "react";

const parseBookData = (book) => {
  const { id } = book;
  const {
    authors,
    title,
    publishedDate,
    description,
    averageRating,
    pageCount,
    categories,
  } = book.volumeInfo;

  return {
    id,
    authors,
    title,
    publishedDate,
    description,
    averageRating,
    pageCount,
    categories,
  };
};

const SearchBooks = (props) => {
  const [bookResults, setBookResults] = useState([]);

  const submitBookSearch = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
    const bookSearch = event.target.search.value;

    if (bookSearch.length < 1) {
      return;
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => setBookResults(json.items.map(parseBookData)));
  };

  console.log(bookResults);

  return (
    <div>
      <form onSubmit={submitBookSearch}>
        <label>Search Books </label>
        <input type="text" name="search" />
        <button type="submit"> search </button>
      </form>
    </div>
  );
};

export default SearchBooks;
