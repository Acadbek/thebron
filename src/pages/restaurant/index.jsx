import { StarIcon2 } from "@/assets/icons";
import ImgGallery from "@/components/shared/img-gallery";
import ThreeDScene from "./components/ThreeDScene";

const Restaurant = () => {
  return (
    <div>
      <h3 className="font-bold text-[40px]">Name Restarount</h3>
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <StarIcon2 />
          <span className="text-2xl">4.6</span>
        </div>
        <address className="not-italic text-[#03559E] underline text-2xl">
          Tashkent
        </address>
      </div>
      <ImgGallery />
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-4 border h-[664px]">1</div>
        <div className="col-span-8 border">
          <ThreeDScene />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
