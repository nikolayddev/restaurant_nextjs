import Featured from "@/components/featured/Featured";
import Offer from "@/components/offer/Offer";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}