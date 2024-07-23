import { auth } from "@/auth"

export default auth((req) => {
    const { auth } = req
    const { nextUrl } = req;

    if (!auth && nextUrl.pathname !== "/auth/login") {
        const newUrl = new URL("/auth/login", nextUrl.origin)
        return Response.redirect(newUrl)
    }

    const userId = auth?.user?.id;
    if (auth && nextUrl.pathname !== `/dashboard/${userId}`) {
        const newUrl = new URL("/", nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: ["/dashboard/:path*"],
};