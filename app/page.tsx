// home page
"use client";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import Image from "next/image";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import bees from "@/public/images/IMG_7718.jpeg";
// import _ from "lodash";

// import dynamic from "next/dynamic";
// import { Metadata } from "next";
// HEAVY COMPONENT FOR LAZY LOADING

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   // ssr: false, this would prevent pre-loading, (ssr = server-side rendering)
//   loading: () => <p>Loading...</p>,
// });
// import HeavyComponent from "./components/HeavyComponent";
import { useState } from "react";

export default function Home() {
  // const session = await getServerSession(authOptions);
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <Image src={bees} alt="Honey Bees" /> */}
      <h1>Hello World</h1>
      <button
        className="btn btn-info"
        onClick={async () => {
          // Lazy Loading: import lodash only when needed (onClick)
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Sort
      </button>
      {/* <button onClick={() => setIsVisible(true)}>Show</button> */}
      {/* {isVisible && <HeavyComponent />} */}
      {/* <Image
        className="object-cover"
        src="https://bit.ly/react-cover"
        alt="Honey Bees"
        fill
        // sizes prop is for next to know the screen size
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
        // width={300}
        // height={170}
        // sizes="100vw"
        // style={{ objectFit: "cover" }}
      /> */}
    </main>
  );
}

// import { Metadata } from "next";

// Override metadata

// export const metadata: Metadata = {
//   title: "",
//   author: "",
// };

// One or the other, cant export both

// for dynamic routes
// export async function generateMetadata(): Promise<Metadata> {
//   const response = await fetch("http://localhost:3000/api/products/1");

//   if (!response.ok) {
//     throw new Error("Failed to fetch product data");
//   }

//   const product = await response.json();

//   return {
//     title: product.name,
//     description: product.description,
//   };
// }
