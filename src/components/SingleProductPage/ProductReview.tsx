import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { useReviews } from "../../hooks/useReviews";
import { ProductReviewCardProps } from "../../types/review";
import { utilityFunction } from "../../utils/utilityFunction";
import { ReviewCard } from "../ReviewCard";
import { Loading } from "../Shared/Loading";

export const ProductReview: FC<{ id: string | undefined }> = ({ id }) => {
  const { useReviewsByProductId } = useReviews;
  const { reviews, loading } = useReviewsByProductId(id);
  const rating = reviews?.averageRating ?? 0;

  const { renderStars } = utilityFunction;

  if (loading) return <Loading />;

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="">
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-8 text-center">
            Customer reviews & rating
          </h2>
          <div className="grid grid-cols-12 mb-11">
            <div className="col-span-12 xl:col-span-4 flex items-center">
              <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    5
                  </p>
                  <FaStar className="text-yellow-400" />
                  <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span
                      className="h-full rounded-[30px] bg-primary-500 flex"
                      style={{
                        width: `${
                          reviews?.totalReviews === 0
                            ? 0
                            : (reviews?.fiveStarCount / reviews?.totalReviews) *
                              100
                        }%`,
                      }}
                    ></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    {reviews?.fiveStarCount}
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    4
                  </p>
                  <FaStar className="text-yellow-400" />
                  <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span
                      className="h-full rounded-[30px] bg-primary-500 flex"
                      style={{
                        width: `${
                          reviews?.totalReviews === 0
                            ? 0
                            : (reviews?.fourStarCount / reviews?.totalReviews) *
                              100
                        }%`,
                      }}
                    ></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    {reviews?.fourStarCount}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    3
                  </p>
                  <FaStar className="text-yellow-400" />
                  <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span
                      className="h-full rounded-[30px] bg-primary-500 flex"
                      style={{
                        width: `${
                          reviews?.totalReviews === 0
                            ? 0
                            : (reviews?.threeStarCount /
                                reviews?.totalReviews) *
                              100
                        }%`,
                      }}
                    ></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    {reviews?.threeStarCount}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    2
                  </p>
                  <FaStar className="text-yellow-400" />
                  <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span
                      className="h-full rounded-[30px] bg-primary-500 flex"
                      style={{
                        width: `${
                          reviews?.totalReviews === 0
                            ? 0
                            : (reviews?.twoStarCount / reviews?.totalReviews) *
                              100
                        }%`,
                      }}
                    ></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    {reviews?.twoStarCount}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    1
                  </p>
                  <FaStar className="text-yellow-400" />
                  <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span
                      className="h-full rounded-[30px] bg-primary-500 flex"
                      style={{
                        width: `${
                          reviews?.totalReviews === 0
                            ? 0
                            : (reviews?.oneStarCount / reviews?.totalReviews) *
                              100
                        }%`,
                      }}
                    ></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    {reviews?.oneStarCount}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
              <div className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="col-span-12 md:col-span-8 flex items-center">
                  <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                    <div className="sm:pr-3 flex items-center justify-center flex-col">
                      <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">
                        {reviews?.averageRating
                          ? reviews?.averageRating
                          : "Not Rated yet"}
                      </h2>
                      <div className="flex items-center gap-3 mb-4">
                        {renderStars(rating)}
                      </div>
                      <p className="font-normal text-lg leading-8 text-gray-400">
                        {reviews?.totalReviews} Reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                  <div className="flex items-center flex-col justify-center w-full h-full ">
                    <button className="rounded-full px-6 py-4 bg-primary-600 font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary-700 hover:shadow-primary-400">
                      Write A Review
                    </button>
                    <button className="rounded-full px-6 py-4 bg-white font-semibold text-lg text-primary-600 whitespace-nowrap w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary-100 hover:shadow-primary-200">
                      See All Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-8  max-xl:max-w-3xl max-xl:mx-auto">
            <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">
              Reviews
            </h4>
            {reviews?.reviews.length > 0 ? (
              reviews?.reviews.map((review: ProductReviewCardProps) => (
                <ReviewCard key={review._id} review={review} />
              ))
            ) : (
              <h2 className="mt-2 text-center text-3xl font-bold text-gray-600 dark:text-gray-100">
                No Reviews found!
              </h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
