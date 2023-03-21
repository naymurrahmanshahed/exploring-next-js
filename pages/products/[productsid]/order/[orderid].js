import React from "react";
import { useRouter } from "next/router";

export default function OrderDetails() {
  const {
    query: { productsid, orderid },
  } = useRouter();
  return (
    <div>
      products: {productsid} , order:{orderid}
    </div>
  );
}
