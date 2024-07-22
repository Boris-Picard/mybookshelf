import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days to session expiry
    updateAge: 24 * 60 * 60, // 24 hours to update session data into database
  },
  callbacks: {
    async session({ session, user }) {
      session.userId = user.id;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      console.log(auth);
      console.log(nextUrl);

      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  // secure: process.env.AUTH_TOKEN,
  pages: {
    signIn: "/",
  },
})