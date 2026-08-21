import { NextRequest, NextResponse } from "next/server";

const supportedLocales = new Set(["ar", "en"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/ar", request.url));
  }

  if (pathname === "/projects" || pathname.startsWith("/projects/")) {
    const url = request.nextUrl.clone();
    url.pathname = `/ar${pathname}`;
    return NextResponse.redirect(url);
  }

  const firstSegment = pathname.split("/")[1];
  const locale = supportedLocales.has(firstSegment) ? firstSegment : "ar";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)"] };
