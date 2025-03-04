// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.



import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Question4() {
  return (
    <Router>
      <div>
        <h1>Question 4</h1>
        <Link to="/posts">Go to Posts</Link>
        <Switch>
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}
