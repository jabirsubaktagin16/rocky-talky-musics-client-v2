import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviewsByProductId = (id: string | null | undefined) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", "product", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/product/${id}`);
      return res.data.data;
    },
  });

  return { reviews, loading, refetch };
};

const useReviewsByUserId = (id: string | null | undefined) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", "user", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/user/${id}`);
      return res.data.data;
    },
  });

  return { reviews, loading, refetch };
};

export const useReviews = {
  useReviewsByProductId,
  useReviewsByUserId,
};
