import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import img from '@/assets/images/main-bg.png'
import Autoplay from "embla-carousel-autoplay"
import HeaderButton from '@/components/shared/header-button/button';
import pilotIcon from '@/assets/icons/pilot.svg'
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import filterIcon from '@/assets/icons/filter.svg'
import '@/styles/index.css'



const Home = () => {
  const caroulselData = [
    {
      title: 'For the first rented house',
      img: img,
      percent: '10%'
    },
    {
      title: 'For the first rented house',
      img: img,
      percent: '20%'
    },
    {
      title: 'For the first rented house',
      img: img,
      percent: '30%'
    },
  ]

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
      
    </div>
  )
}

export default Home
