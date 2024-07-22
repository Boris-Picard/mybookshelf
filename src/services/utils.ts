import "server-only";

import { cache } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getCurrentUser = cache(async () => {
    const session = await auth();
    if (!session?.user) {
        redirect("/");
    }
    return session.user;
});