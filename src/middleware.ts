import { auth } from "@/auth"

export default auth((req) => {
    const { auth } = req
    const { nextUrl } = req;

    //if not auth & url != auth/login redirect to login page
    if (!auth && nextUrl.pathname !== "/auth/login") {
        const newUrl = new URL("/auth/login", nextUrl.origin)
        return Response.redirect(newUrl)
    }

    // verify if user is connected & dashboard id correspond to user
    const userId = auth?.user?.id;
    if (!auth) {
        const newUrl = new URL("/", nextUrl.origin)
        return Response.redirect(newUrl)
    }

    if (auth && nextUrl.pathname.startsWith("/dashboard")) {
        const allowedPaths = [
            `/dashboard/${userId}`,
            `/dashboard/favorites/${userId}`,
            `/dashboard/categories/${userId}`,
            `/dashboard/categories/${userId}/:path*`,
            `/dashboard/book/${userId}/:path*`
        ];

        const isAllowed = allowedPaths.some(path => {
            const regex = new RegExp(`^${path.replace(":path*", ".*")}$`);
            return regex.test(nextUrl.pathname);
        });

        if (!isAllowed) {
            const newUrl = new URL("/", nextUrl.origin);
            return Response.redirect(newUrl);
        }
    }

})

export const config = {
    matcher: ["/dashboard/:path*"],
};