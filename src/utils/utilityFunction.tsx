import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const renderStars = (averageRating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (averageRating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (averageRating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return stars;
};

const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const utilityFunction = {
  renderStars,
  capitalizeFirstLetter,
};
