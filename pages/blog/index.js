import Link from "next/link";
import React from "react";

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`} passHref>
          <h1>{post.title}</h1>
        </Link>
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
