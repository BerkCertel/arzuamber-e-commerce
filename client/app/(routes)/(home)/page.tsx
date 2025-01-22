import PageContainer from "@/app/components/Containers/PageContainer";
import Heading from "@/app/components/general/Heading";
import Brand from "@/app/components/home/Brand";
import Category from "@/app/components/home/Category";
import HomeSlider from "@/app/components/sliders/HomeSlider/HomeSlider";
import ProductSlider from "@/app/components/sliders/productSlider/ProductSlider";

export default function Home() {
  return (
    <PageContainer>
      <HomeSlider />
      <Heading text="All Categories" center />
      <Category />
      <ProductSlider />
      <Brand />
    </PageContainer>
  );
}
