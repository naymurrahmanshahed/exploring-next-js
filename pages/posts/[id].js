import React from "react";

export default function post({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticPaths() {
  //data fetching
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  //get the paths we want to pre-render based on posts

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // pre-render only these at build time

  //{fallback:false } means other routes should 404

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //params contains the post id
  //if route is like /posts/1 then params.id is 1

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}
