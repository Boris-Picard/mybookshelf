"use server";

import { getCurrentUser } from "@/services/CurrentUser";
import { createFavorite } from "./actions/favorite-action";
import FavoriteButtonClient from "./FavoriteButtonClient";

export default async function FavoriteButton() {
  const getUserId = await getCurrentUser();
  console.log(getUserId);

  return (
    <form action={createFavorite(getUserId?.id)}>
      <button type="submit">
        <FavoriteButtonClient />
      </button>
    </form>
  );
}
