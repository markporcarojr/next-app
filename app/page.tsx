import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Span } from "next/dist/trace";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="">
      <h1 className="text-center">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>
      <Link href="/users" className="btn btn-secondary my-2 ">
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
