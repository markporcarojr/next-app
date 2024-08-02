// app/auth/signin/page.tsx

"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 max-w-md w-full bg-white rounded shadow-md  dark:text-gray-900">
        <h2 className="text-2xl font-semibold mb-6 text-black">Sign In</h2>
        <button
          onClick={() => signIn("credentials")}
          className="btn btn-primary w-full mb-4"
        >
          Sign in with Credentials
        </button>
        <h3 className="text-center text-black">
          Don&apos;t have an account?
          <Link href="/auth/register">
            <div>Register</div>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignInPage;
