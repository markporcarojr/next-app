"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const Navbar = () => {
  const { status, data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar bg-indigo-600 text-neutral-content ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-neutral transition-all duration-500 ease-in-out transform ${
                isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <li>{status === "loading" && <Loading />}</li>
              <li>
                <Link href="/" onClick={closeDropdown}>
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/users" onClick={closeDropdown}>
                  Users
                </Link>
              </li>
              <li>
                <Link href="/products" onClick={closeDropdown}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/upload" onClick={closeDropdown}>
                  Uploads
                </Link>
              </li>
              <li>
                {status === "unauthenticated" && (
                  <Link href="/api/auth/signin" onClick={closeDropdown}>
                    Login
                  </Link>
                )}
              </li>
              <li>
                {status === "authenticated" && (
                  <Link href="/api/auth/signout" onClick={closeDropdown}>
                    Sign Out
                  </Link>
                )}
              </li>
            </ul>
          )}
        </div>
        {status === "authenticated" && <div>{session.user!.name}</div>}
      </div>

      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          Marks Next App
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
