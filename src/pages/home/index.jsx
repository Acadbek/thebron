import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import img1 from '@/assets/images/main-bg.png'
import Autoplay from "embla-carousel-autoplay"
import HeaderButton from '@/components/shared/header-button/button';
import { Building, Chayxana, Dacha, Kino, Djostik, Lager, Restoran, Sanatoriya, Pilot, Poezd } from "@/assets/icons";
import { Search } from "@/assets/icons";
import Filter from '@/components/shared/filter'
import '@/styles/index.css'
import Card from "@/components/shared/card";
import { useLazyGetResortsQuery } from "@/features/resort";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ToggleGroup } from "@/components/ui/toggle-group";

const Home = () => {
  const [getResorts, { data, isLoading }] = useLazyGetResortsQuery()
  const [defaultColor, setDefaultColor] = useState('#03559E')
  const caroulselData = [
    {
      title: 'For the first rented house',
      img: img1,
      percent: '10%'
    },
    {
      title: 'For the first rented house',
      img: img1,
      percent: '20%'
    },
    {
      title: 'For the first rented house',
      img: img1,
      percent: '30%'
    },
  ]

  useEffect(() => {
    getResorts()
  }, [])

  const menus = [
    {
      id: 1,
      title: 'Отели',
      icon: <Building fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 2,
      title: 'Дача',
      icon: <Dacha fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 3,
      title: 'Лагерь',
      icon: <Lager fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 4,
      title: 'Санатория',
      icon: <Sanatoriya fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 5,
      title: 'Ресторан',
      icon: <Restoran fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 6,
      title: 'Чайхана',
      icon: <Chayxana fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 7,
      title: 'Кино',
      icon: <Kino fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 8,
      title: 'Game club',
      icon: <Djostik fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 9,
      title: 'Самолет',
      icon: <Pilot fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 10,
      title: 'Поезд',
      icon: <Poezd fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 11,
      title: 'Дача',
      icon: <Dacha fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
    {
      id: 12,
      title: 'Дача',
      icon: <Dacha fillColor={defaultColor} />,
      isActive: false, // Add an `isActive` property to track selection
    },
  ]

  const filter = (menuId) => {
  };

  return (
    <div>
      <Carousel
        opts={{
          align: "start", loop: true, jump: false
        }}
        plugins={[
          Autoplay({ delay: 6000 })
        ]}
        w-full mt="40px">
        <CarouselContent>
          {caroulselData?.map((item, index) => (
            <CarouselItem key={index}>
              <div text="88px" font-bold leading="96px" className='text-[#fff]' select-none relative>
                <p absolute mt="93px" ml="40px" >{item?.title}</p>
                <img w-full rounded-2xl h="420px" object-cover src={item?.img} alt="Main background images" />
                <p absolute bottom="93px" ml="40px" rounded-lg p-4 bg="#D9D9D9AB">{item?.percent}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div flex items-center mt="44px" gap-4>
        <Button>Все</Button>
        <ToggleGroup type="single" w-full flex justify-center items-center whitespace-nowrap rounded-md>
          {menus?.map((item) => (
            <HeaderButton
              key={item.id}
              onClick={() => filter(item.id)}
              value={item.id}
              ariaLabel={`Selected-${item.title}`}
              icon={item.icon}
            >
              {item?.title}
            </HeaderButton>
          ))}
        </ToggleGroup>
        <Filter />
      </div>
      <div border-b mt="44px"></div>
      <div text="58px" relative flex justify-center items-center w="810px" mx-auto>
        <Input mt="60px" max-w="810px" h="80px" className="rounded-full px-[28px]" placeholder="Поиск направлений" />
        <div cursor-pointer absolute right="8px" flex top="68px" items-center justify-center bg="#03559E" w="64px" h="64px" className='rounded-full'>
          <Search />
        </div>
      </div>
      <div w="90%" max-w="1800px" mx-auto mt-0 px-6>
        <h2 text="28px" font-semibold leading-9 mt="60px" mb-8>Дачные дома</h2>
        <div grid grid-cols-4 gap="82px">
          {data?.results?.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div >
  )
}

export default Home
