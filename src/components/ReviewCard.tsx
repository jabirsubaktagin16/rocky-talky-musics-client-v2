import { FC } from "react";
import { ProductReviewCardProps } from "../types/review";
import { utilityFunction } from "../utils/utilityFunction";

export const ReviewCard: FC<{ review: ProductReviewCardProps }> = ({
  review,
}) => {
  const rating = review?.rating ?? 0;

  const { renderStars } = utilityFunction;

  return (
    <div className="border-b border-gray-200 mb-4">
      <div className="flex sm:items-center flex-col sm:flex-row justify-between">
        <div className="flex items-center gap-3">{renderStars(rating)}</div>
        <div className="flex items-center gap-3">
          <h6 className="font-semibold text-lg leading-8 text-black">
            {review?.userId?.name?.firstName} {review?.userId?.name?.lastName}
          </h6>
          <p className="font-medium text-base leading-7 text-gray-400">
            {new Date(review?.createdAt).toISOString().split("T")[0]}
          </p>
        </div>
      </div>

      <p className="font-normal text-lg leading-8 text-gray-500 ">
        {review?.comment}
      </p>
    </div>
  );
};
