
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Hey this is home the id is {process.env.NEXT_PUBLIC_ID} and secret is {process.env.NEXT_PUBLIC_SECRET} and name is {process.env.NAME}
    </div>
  );
}
