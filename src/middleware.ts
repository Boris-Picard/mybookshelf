import { auth } from "@/auth"

export default auth((req) => {
    console.log("middleware",req.auth);
    
    if (!req.auth && req.nextUrl.pathname !== "/auth/login") {
        const newUrl = new URL("/auth/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: ["/dashboard/:path*"],
};