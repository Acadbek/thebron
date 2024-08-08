import { StarIcon2 } from "@/assets/icons";
import ImgGallery from "@/components/shared/img-gallery";
import ThreeDScene from "./components/ThreeDScene";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { SceneContext } from "./context";

const Restaurant = () => {
  const { chair, setChair } = React.useContext(SceneContext);

  const select = (value) => {
    setChair(value);
  };

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
        <div className="col-span-4 border h-[664px]">
          <Select onValueChange={(value) => select(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Chair number</SelectLabel>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="11">11</SelectItem>
                <SelectItem value="12">12</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-8 border">
          <ThreeDScene />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
