"use client";
import { Rate } from "@/types/Rate";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";


const myStyles = {
  itemShapes: Star,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}

const Ratings: React.FC<Rate> = ({ ratings }: Rate) => {
  return [ratings].map((value) => {
    return <Rating readOnly value={value} key={value} className="h-6 w-6" itemStyles={myStyles} />;
  });
};

export default Ratings;
