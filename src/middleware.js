export function middleware(request) {

  const protectedRoutes = ["/profile"];
  const authRoutes = ["/login", "/register"];
  const publicRoutes = ["/contact", "/shop"];

  const currentUser = request.cookies.get('currentUser')?.value
 
  if (!currentUser && protectedRoutes.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = { matcher: ['/shop'] }

