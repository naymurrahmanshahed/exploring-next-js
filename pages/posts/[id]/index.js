import { useRouter } from "next/router";

export default function product() {
  const {
    query: { id },
  } = useRouter();
  return <div>Product id: {id}</div>;
}
