import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import RegisterForm from "./components/RegisterForm";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="">
      <h1 className="text-center">
        Hello {session && <span>{session?.user?.email}</span>}
      </h1>
      <Link href="/users" className="btn btn-secondary my-2 ">
        Users
      </Link>
      <ProductCard />
      <div className="container mx-auto px-4 py-6">
        <RegisterForm />
      </div>
    </main>
  );
}
