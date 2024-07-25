"use client";
import { Star, StarHalf } from "lucide-react";

interface Rate {
  ratings: number;
}

const Ratings: React.FC<Rate> = ({ ratings }: Rate) => {
  return [ratings].map((star) => {
    return (
      <>
        {star % 1 === 0 && (
          <span
            className="start"
            style={{
              color: "gold",
            }}
          >
            <Star fill="gold" />
          </span>
        )}
      </>
    );
  });
};

export default Ratings;
