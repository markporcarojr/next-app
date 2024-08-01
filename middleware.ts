export { default } from "next-auth/middleware"; // Shorthand export for import/export

export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one parameters
  matcher: ["/dashboard/:path*"],
};
