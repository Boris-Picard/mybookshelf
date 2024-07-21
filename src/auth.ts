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
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days to session expiry
    updateAge: 24 * 60 * 60, // 24 hours to update session data into database
  },
  callbacks: {
    //  TODO CHECK SESSION TOKEN WITH USER DB && CHECK ALL PAGE WITH AUTH
    async session({ session, user }) {
      session.userId = user.id;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
})