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

const useProductByCategory = (category: string | null | undefined) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?category=${category}`);
      return res.data;
    },
  });

  return { products, loading, refetch };
};

const useProductDetails = (id: string | null) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: product,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data.data;
    },
  });

  return { product, loading, refetch };
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
  useProductByCategory,
  useProductDetails,
  useNewProducts,
};
