import React from "react";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const {
    query: { productsid },
  } = useRouter();
  return <div>ProductDetails:{productsid}</div>;
}
