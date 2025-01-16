import HomeSlider from "@/app/components/sliders/HomeSlider/HomeSlider";
import ProductSlider from "@/app/components/sliders/productSlider/ProductSlider";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HomeSlider />
      <ProductSlider />
    </div>
  );
}
