import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';

  console.log('isAuthenticated:', isAuthenticated); // Log the cookie value for debugging

  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
