import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products,
    isPending: loading,
    refetch: productsRefetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });

  return { products, loading, productsRefetch };
};

const useNewProducts = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products,
    isPending: loading,
    refetch: productsRefetch,
  } = useQuery({
    queryKey: ["products", "latest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products/latest");
      return res.data;
    },
  });

  return { products, loading, productsRefetch };
};

export const useProducts = {
  useAllProducts,
  useNewProducts,
};
