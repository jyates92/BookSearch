import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";

const Link = (props) => <a>{props.children}</a>;

const DeleteBtn = ({ onClick }) => (
  <button onClick={onClick}>Delete Book</button>
);
const FavoritesList = () => {
  const listItems = [
    {
      _id: "1",
      title: "1984",
      author: "George Orwell",
    },
    {
      _id: "2",
      title: "Animal Farm",
      author: "George Orwell",
    },
  ];
  const removeFromFavorites = (id) => console.log(`hello: ${id}`);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Posts</h1>
      {listItems.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
          {listItems.map((post) => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
