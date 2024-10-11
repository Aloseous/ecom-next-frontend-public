import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 bg-light-bg text-light-textColor dark:bg-dark-bg dark:text-dark-textColor">
      <Slider />
      <Collections />
      <ProductList />
    </div>
  );
}

export const dynamic = "force-dynamic"
