import React from "react";
import { useRouter } from "next/router";
export default function PostDetails() {
  const {
    query: { postid },
  } = useRouter();
  return <div>PostDetails: {postid}</div>;
}
