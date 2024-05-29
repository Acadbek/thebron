import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
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
  const [activeMenu, setActiveMenu] = useState(null);
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
      title: 'Все',
      // icon: <Building fillColor={activeMenu === 1 ? 'white' : '#03559E'} />, // This icon is commented out; uncomment if needed
    },
    {
      id: 2,
      title: 'Отели',
      icon: <Building fillColor={activeMenu === 2 ? 'white' : '#03559E'} />,
    },
    {
      id: 3,
      title: 'Дача',
      icon: <Dacha fillColor={activeMenu === 3 ? 'white' : '#03559E'} />,
    },
    {
      id: 4,
      title: 'Лагерь',
      icon: <Lager fillColor={activeMenu === 4 ? 'white' : '#03559E'} />,
    },
    {
      id: 5,
      title: 'Санатория',
      icon: <Sanatoriya fillColor={activeMenu === 5 ? 'white' : '#03559E'} />,
    },
    {
      id: 6,
      title: 'Ресторан',
      icon: <Restoran fillColor={activeMenu === 6 ? 'white' : '#03559E'} />,
    },
    {
      id: 7,
      title: 'Чайхана',
      icon: <Chayxana fillColor={activeMenu === 7 ? 'white' : '#03559E'} />,
    },
    {
      id: 8,
      title: 'Кино',
      icon: <Kino fillColor={activeMenu === 8 ? 'white' : '#03559E'} />,
    },
    {
      id: 9,
      title: 'Game club',
      icon: <Djostik fillColor={activeMenu === 9 ? 'white' : '#03559E'} />,
    },
    {
      id: 10,
      title: 'Самолет',
      icon: <Pilot fillColor={activeMenu === 10 ? 'white' : '#03559E'} />,
    },
    {
      id: 11,
      title: 'Поезд',
      icon: <Poezd fillColor={activeMenu === 11 ? 'white' : '#03559E'} />,
    },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div>
      <Carousel
        opts={{ align: "start", loop: true, jump: false }}
        plugins={[Autoplay({ delay: 6000 })]}
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
      <div flex items-center gap-4 justify-center mt="44px" >
        <ToggleGroup
          defaultValue="1"
          type="single"
          flex justify-center whitespace-nowrap header-menus >
          {menus?.map((item) => (
            <HeaderButton
              key={item?.id}
              onClick={() => handleMenuClick(item?.id)}
              value={item?.id}
              ariaLabel={`Selected-${item?.title}`}
              icon={item?.icon}
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
