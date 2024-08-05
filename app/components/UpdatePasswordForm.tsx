// components/RegisterForm.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UpdatePasswordForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/update-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, confirmPassword }),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess("Password Updated successfully!");
        setPassword("");
        setConfirmPassword("");
        router.push("/");
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="black"
              className="h-4 w-4 opacity-70   dark:text-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="grow p-2  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-900"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="black"
              className="h-4 w-4 opacity-70  dark:text-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="grow p-2  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-900"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button className="btn btn-primary m-3 text-center" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatePasswordForm;
