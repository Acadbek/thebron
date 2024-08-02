import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import img1 from "@/assets/images/main-bg.png";
import Autoplay from "embla-carousel-autoplay";
import HeaderButton from "@/components/shared/header-button/button";
import {
  Building,
  Chayxana,
  Dacha,
  Kino,
  Djostik,
  Lager,
  Restoran,
  Sanatoriya,
  Pilot,
  Poezd,
  Search,
} from "@/assets/icons";
import Filter from "@/components/shared/filter";
import "@/styles/index.css";
import Card from "@/components/shared/card";
import { useLazyGetResortsQuery } from "@/features/resort";
import { Input } from "@/components/ui/input";
import { ToggleGroup } from "@/components/ui/toggle-group";

const caroulselData = [
  { title: "For the first rented house", img: img1, percent: "10%" },
  { title: "For the first rented house", img: img1, percent: "20%" },
  { title: "For the first rented house", img: img1, percent: "30%" },
];

const menus = [
  { id: 1, title: "Все", icon: Building },
  { id: 2, title: "Отели", icon: Building },
  { id: 3, title: "Дача", icon: Dacha },
  { id: 4, title: "Лагерь", icon: Lager },
  { id: 5, title: "Санатория", icon: Sanatoriya },
  { id: 6, title: "Ресторан", icon: Restoran },
  { id: 7, title: "Чайхана", icon: Chayxana },
  { id: 8, title: "Кино", icon: Kino },
  { id: 9, title: "Game club", icon: Djostik },
  { id: 10, title: "Самолет", icon: Pilot },
  { id: 11, title: "Поезд", icon: Poezd },
];

const resorts = [
  {
    id: 1,
    name: "Mountain View Resort",
    location_name: "123 Alpine St, Mountain Town, MT 56789",
    availability_dates: [{ date: "2024-08-25" }],
    daily_price: 200,
    images: [
      "https://a0.muscache.com/im/pictures/867f3f73-d34d-4ab9-8733-f7616fed468c.jpg",
      "https://a0.muscache.com/im/pictures/24047cc9-6c13-4d86-9a20-6f588219e9a0.jpg",
      "https://a0.muscache.com/im/pictures/e8aec89f-e8d5-475a-87cd-423dee7cb818.jpg",
    ],
  },
  {
    id: 2,
    name: "Beachside Paradise",
    location_name: "456 Ocean Ave, Beach City, BC 12345",
    availability_dates: [{ date: "2024-08-25" }],
    daily_price: 300,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-39327758/original/7425d87d-7cf4-458e-9483-3f86c08bba7f.jpeg",
    ],
  },
  {
    id: 3,
    name: "Forest Retreat",
    location_name: "789 Forest Rd, Woodland, WL 98765",
    daily_price: 250,
    availability_dates: [{ date: "2024-08-25" }],
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-40910232/original/1da673da-6164-40f3-8f1c-a74730bdce25.jpeg",
    ],
  },

  {
    id: 4,
    name: "Desert Oasis",
    location_name: "321 Sand Dunes, Desertville, DV 54321",
    availability_dates: [{ date: "2024-08-25" }],
    daily_price: 220541,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1129733682029142491/original/3740023a-1338-4c6d-8f6f-7512d7fef6de.jpeg?im_w=720",
    ],
  },
  {
    id: 5,
    name: "City Lights Hotel",
    location_name: "654 Metro Blvd, Cityscape, CS 11223",
    availability_dates: [{ date: "2024-08-25" }],
    daily_price: 280,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-668620215138733009/original/3a98d3df-4b4d-4e03-908c-1e719e46c98d.jpeg",
    ],
  },
];

const inActiveIconColor = "#03559E";
const activeIconColor = "#ffffff";

const Home = () => {
  // const [getResorts, { data, isLoading }] = useLazyGetResortsQuery();
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [isImgLoaded, setImgIsLoaded] = React.useState(false);

  // React.useEffect(() => {
  //   getResorts();
  // }, [getResorts]);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  let src = caroulselData[0]?.img;

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgIsLoaded(true);
  }, [src]);

  return (
    <>
      {isImgLoaded ? (
        <Carousel
          opts={{ align: "start", loop: true, jump: false }}
          plugins={[Autoplay({ delay: 6000 })]}
          className="w-full mt-10"
        >
          <CarouselContent>
            {caroulselData?.map((item, index) => (
              <CarouselItem key={index}>
                <div
                  text="88px"
                  font-bold
                  leading="96px"
                  className="text-[#fff]"
                  select-none
                  relative
                >
                  <p absolute mt="93px" ml="40px">
                    {item?.title}
                  </p>
                  <img
                    w-full
                    rounded-2xl
                    h="420px"
                    object-cover
                    src={item?.img}
                    alt="Main background images"
                  />
                  <p
                    absolute
                    bottom="93px"
                    ml="40px"
                    rounded-lg
                    p-4
                    bg="#D9D9D9AB"
                  >
                    {item?.percent}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="animate-pulse rounded-md bg-muted h-[420px]"></div>
      )}
      <div className="flex items-center gap-4 justify-center mt-11">
        <ToggleGroup
          defaultValue="1"
          type="single"
          className="flex justify-center whitespace-nowrap header-menus"
        >
          {menus?.map((item) => {
            const IconComponent = item?.icon;
            return (
              <HeaderButton
                key={item?.id}
                onClick={() => handleMenuClick(item?.id)}
                value={item?.id}
                ariaLabel={`Selected-${item?.title}`}
                icon={
                  <IconComponent
                    fillColor={
                      activeMenu === item.id
                        ? activeIconColor
                        : inActiveIconColor
                    }
                  />
                }
              >
                {item.title}
              </HeaderButton>
            );
          })}
        </ToggleGroup>
        <Filter />
      </div>

      <div className="border-b mt-11"></div>

      <div className="relative flex justify-center items-center w-[810px] mx-auto mt-15">
        <Input
          className="mt-15 max-w-[810px] h-20 rounded-full px-7"
          placeholder="Поиск направлений"
        />
        <div className="absolute right-2 top-17 flex items-center justify-center bg-[#03559E] w-16 h-16 rounded-full cursor-pointer">
          <Search />
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-[28px] font-semibold leading-9 mt-15 mb-8">
          Дачные дома
        </h2>
        <div className="grid-container">
          {resorts?.map((item) => (
            <Card key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
