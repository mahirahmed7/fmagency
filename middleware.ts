import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the current path
  const { pathname } = request.nextUrl;
  
  // Skip for API routes, static files, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Handle trailing slashes (remove them)
  if (pathname.endsWith('/') && pathname !== '/') {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
} 