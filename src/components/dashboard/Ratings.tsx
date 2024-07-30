"use client";
import { Rate } from "@/types/Rate";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#ddd",
};

const Ratings: React.FC<Rate> = ({ ratings }: Rate) => {
  return [ratings].map((value) => {
    return (
      <Rating
        readOnly
        value={value}
        key={value}
        className="h-5 w-5"
        itemStyles={myStyles}
      />
    );
  });
};

export default Ratings;
