// home page
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import bees from "@/public/images/IMG_7718.jpeg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <Image src={bees} alt="Honey Bees" /> */}
      <h1>Hello World</h1>
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
