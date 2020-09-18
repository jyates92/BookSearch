import React, { useEffect, useState } from "react";

import {
  Results,
  Wrapper,
  Book,
  BookInfo,
  Form,
  ViewLink,
} from "../components/BookComponents";

const Link = (props) => <a>{props.children}</a>;

const DeleteBtn = ({ onClick }) => (
  <button onClick={onClick}>Delete Book</button>
);
const FavoritesList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);

  const fetchBooks = () => {
    console.log("test fetch books");
    fetch("http://localhost:3200/books")
      .then((response) => response.json())
      .then((json) => setBooks(json))
      .catch((error) => setError(true));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const removeFromFavorites = (_id) => {
    fetch("http://localhost:3200/delete-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          fetchBooks();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <h1 className="text-center">Here's All of Your Favorite Posts</h1>
      <Results>
        {books.map((book) => (
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
              <button onClick={() => removeFromFavorites(book._id)}>
                Delete Book
              </button>
            </BookInfo>
          </Book>
        ))}
      </Results>
    </Wrapper>
  );
};

export default FavoritesList;

// {books.length ? (
//   <L>
//     <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
//     {books.map((post) => (
//       <ListItem key={post._id}>
//         <Link to={"/posts/" + post._id}>
//           <strong>
//             {post.title} by {post.authors.join(", ")}
//           </strong>
//         </Link>
//         <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
//       </ListItem>
//     ))}
//   </List>
// ) : (
//   <h3>You haven't added any favorites yet!</h3>
// )}
