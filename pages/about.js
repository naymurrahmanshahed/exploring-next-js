import React from "react";

export default function About({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  //call an external API end point to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  //by returning {props:{posts}}, the blog component will recive 'posts as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
