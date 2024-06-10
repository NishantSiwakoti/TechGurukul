import { FaStar, FaRegStar } from "react-icons/fa";

export const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <div className="flex">
      {ratingArray.map((value, index) =>
        value ? (
          <FaStar key={index} className="text-lg text-yellow-500 mr-1" />
        ) : (
          <FaRegStar key={index} className="text-lg text-yellow-500 mr-1" />
        )
      )}
    </div>
  );
};
