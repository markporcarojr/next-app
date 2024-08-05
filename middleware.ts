// Shorthand export for middleware import/export
export { default } from "next-auth/middleware";

// export const config = {
//   // *: zero or more parameters
//   // +: one or more parameters
//   // ?: zero or one parameters
//   matcher: ["/:path*"],
// };

// For Development only
export const config = {
  matcher: ["/((?!api/).*)"], // Apply middleware to all routes except API routes
};
