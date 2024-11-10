import { BrandPartnership } from "../components/HomePage/BrandPartnership";
import { FeaturedCategories } from "../components/HomePage/FeaturedCategories";
import { ProductSection } from "../components/HomePage/ProductSection";
import { TopBanner } from "../components/HomePage/TopBanner";
import { Loading } from "../components/Shared/Loading";
import { PageTitle } from "../components/Shared/PageTitle";
import { useProducts } from "../hooks/useProducts";

export const Home = () => {
  const { useNewProducts } = useProducts;
  const { products, loading, productsRefetch } = useNewProducts();

  if (loading) return <Loading />;
  return (
    <>
      <PageTitle title={""} />
      <TopBanner />
      <FeaturedCategories />
      <ProductSection
        title="New Arrivals"
        paragraph="Discover the latest in sound and style with our newest instruments. From versatile designs to premium quality, these arrivals are crafted to inspire musicians of all levels."
        arrayList={products?.data}
      />
      {/* <ProductSection
        title="Best Sellers"
        paragraph="Shop our most popular instruments, chosen by musicians worldwide for their quality and performance. Find your favorite among the top picks that stand the test of time."
      /> */}
      <BrandPartnership />
    </>
  );
};
