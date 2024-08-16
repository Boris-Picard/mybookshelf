import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"

const isDevOrProd = process.env.NODE_ENV === "production"

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: isDevOrProd ? process.env.GITHUB_CLIENT_ID : process.env.GITHUB_LOCAL_CLIENT_ID,
      clientSecret: isDevOrProd? process.env.GITHUB_CLIENT_SECRET : process.env.GITHUB_LOCAL_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
} satisfies NextAuthConfig


