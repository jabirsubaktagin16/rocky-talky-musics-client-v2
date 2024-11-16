import { useParams } from "react-router-dom";
import { Loading } from "../components/Shared/Loading";
import { PageTitle } from "../components/Shared/PageTitle";
import { ProductInfo } from "../components/SingleProductPage/ProductInfo";
import { ProductReview } from "../components/SingleProductPage/ProductReview";
import { useProducts } from "../hooks/useProducts";

export const ProductDetails = () => {
  const { id } = useParams();
  const { useProductDetails } = useProducts;
  const { product, loading } = useProductDetails(id);

  if (loading) return <Loading />;

  return (
    <>
      <PageTitle title={product?.name} />
      <ProductInfo product={product} />
      <ProductReview id={id} />
    </>
  );
};
