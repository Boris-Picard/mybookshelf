import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"

const isProduction = process.env.NODE_ENV === 'production';


export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: isProduction
        ? "https://mybookshelf-six.vercel.app/api/auth/callback/google"
        : "http://localhost:3000/api/auth/callback/google"
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: isProduction
        ? "https://mybookshelf-six.vercel.app/api/auth/callback/github"
        : "http://localhost:3000/api/auth/callback/github"
    }),
  ],
} satisfies NextAuthConfig


