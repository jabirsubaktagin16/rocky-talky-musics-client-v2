import { FeaturedCategories } from "../components/HomePage/FeaturedCategories";
import { TopBanner } from "../components/HomePage/TopBanner";
import { PageTitle } from "../components/Shared/PageTitle";

export const Home = () => {
  return (
    <>
      <PageTitle title={""} />
      <TopBanner />
      <FeaturedCategories />
      {/* <ProductSection
        title="New Arrivals"
        paragraph="Discover the latest in sound and style with our newest instruments. From versatile designs to premium quality, these arrivals are crafted to inspire musicians of all levels."
      />
      <ProductSection
        title="Best Sellers"
        paragraph="Shop our most popular instruments, chosen by musicians worldwide for their quality and performance. Find your favorite among the top picks that stand the test of time."
      /> */}
    </>
  );
};
