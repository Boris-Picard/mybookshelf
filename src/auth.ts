import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GitHub from "next-auth/providers/github"
// import Nodemailer from "next-auth/providers/nodemailer"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub]
})

// Nodemailer({
//     server: {
//         host: process.env.EMAIL_SERVER_HOST,
//         port: process.env.EMAIL_SERVER_PORT,
//         auth: {
//             user: process.env.EMAIL_SERVER_USER,
//             pass: process.env.EMAIL_SERVER_PASSWORD,
//         },
//     },
//     from: process.env.EMAIL_FROM,
// })