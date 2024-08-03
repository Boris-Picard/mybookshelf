"use server";

import UserService from "@/services/UserService";
import { User } from "next-auth";
import { redirect } from "next/navigation";

export async function verifyUser(userId: string) {
    const userService = new UserService();
    const user: User | null = await userService.getUser();

    if (!user) {
        redirect("/");
        return null;
    }

    if (user.id !== userId) {
        redirect("/");
        return null;
    }

    return user;
}
