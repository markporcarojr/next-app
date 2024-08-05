// app/auth/signin/page.tsx
import { getProviders, signIn } from "next-auth/react";

export default async function SignIn() {
  // Fetch providers in a server component
  const providers = await getProviders();
  console.log("Providers:", providers); // Debugging line

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        {providers ? (
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))
        ) : (
          <p>No providers available.</p>
        )}
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
