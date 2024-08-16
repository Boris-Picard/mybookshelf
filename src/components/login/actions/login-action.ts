"use server"

import { signIn } from "@/auth";


export async function handleSignInGithub() {
    await signIn("github");
}


export async function handleSignInGoogle() {
    await signIn("google");
}