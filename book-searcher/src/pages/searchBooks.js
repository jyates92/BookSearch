import React, { useState } from "react";
import styled from "styled-components";

import {
  Results,
  Wrapper,
  Book,
  BookInfo,
  Form,
  ViewLink,
} from "../components/BookComponents";

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
    infoLink,
  } = book.volumeInfo;
  let imageLink;
  if (book.volumeInfo.imageLinks) {
    imageLink = book.volumeInfo.imageLinks.smallThumbnail;
  } else {
    imageLink =
      "https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg";
  }
  return {
    id,
    authors,
    title,
    publishedDate,
    description,
    averageRating,
    pageCount,
    categories,
    imageLink,
    infoLink,
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

  const saveBook = (book) => {
    fetch("http://localhost:3200/save-book", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <Form onSubmit={submitBookSearch}>
        <label>Search Books </label>
        <div>
          <input type="text" name="search" />
          <button type="submit"> search </button>
        </div>
      </Form>
      <Results>
        {bookResults.map((book) => (
          <Book key={book.id}>
            <div className="img-wrapper">
              <img src={book.imageLink} />
            </div>
            <BookInfo>
              <p>{book.title}</p>
              <p> Authors: {book.authors.join(", ")}</p>

              <ViewLink href={book.infoLink} target="_blank">
                View
              </ViewLink>
              <p>{book.description}</p>
              <button onClick={() => saveBook(book)}>Save Book</button>
            </BookInfo>
          </Book>
        ))}
      </Results>
    </Wrapper>
  );
};

export default SearchBooks;
