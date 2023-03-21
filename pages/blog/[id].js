import React from "react";

export default function Post({ data }) {
  return <div>{data.title}</div>;
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const posts = await res.json();

  return {
    props: {
      data: posts,
    },
  };
}
