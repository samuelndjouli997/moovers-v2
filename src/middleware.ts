import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) { 
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Redirection de la page d'accueil vers /auth/login
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Interdire l'accès aux pages protégées sans token
  const protectedRoutes = ["/dashboard", "/preferences", "/podcast"];
  if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Empêcher l'accès aux pages d'authentification si l'utilisateur est connecté
  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/preferences", "/podcast", "/auth/:path*"],
};
