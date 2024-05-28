import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import img1 from '@/assets/images/main-bg.png'
import Autoplay from "embla-carousel-autoplay"
import HeaderButton from '@/components/shared/header-button/button';
import pilotIcon from '@/assets/icons/pilot.svg'
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import filterIcon from '@/assets/icons/filter.svg'
import searchIcon from '@/assets/icons/search.svg'
import img from '@/assets/images/image.png'
import '@/styles/index.css'
import { Input } from '@/components/ui/input';
import Card from "@/components/shared/card";
import { useLazyGetResortsQuery } from "@/features/resort";
import { useEffect } from "react";


const Home = () => {
  const [getResorts, { data, isLoading }] = useLazyGetResortsQuery()
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

  const buttons = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

  return (
    <div>
      <Carousel
        opts={{
          align: "start", loop: true, jump: false
        }}
        plugins={[
          Autoplay({ delay: 4000 })
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
        <ScrollArea w-full whitespace-nowrap rounded-md>
          {buttons.map(() => (
            <HeaderButton icon={pilotIcon}>click</HeaderButton>
          ))}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button flex items-center justify-center gap-2 variant="outline">
          Фильтр
          <img src={filterIcon} alt="" />
        </Button>
      </div>
      <div border-b mt="44px"></div>
      <div text="58px" relative flex justify-center items-center w="810px" mx-auto>
        <Input mt="60px" max-w="810px" h="80px" className="rounded-full px-[28px]" placeholder="Поиск направлений" />
        <div cursor-pointer absolute right="8px" flex top="68px" items-center justify-center bg="#03559E" w="64px" h="64px" className='rounded-full'>
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div w="90%" max-w="1800px" mx-auto mt-0 px-6>
        <h2 text="28px" not-italic font-semibold leading-9 mt="60px" mb-8>Дачные дома</h2>
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
