import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img from '@/assets/images/main-bg.png'
import Autoplay from "embla-carousel-autoplay"

const Home = () => {
  const { t } = useTranslation();

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

  return (
    <div>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({ delay: 4000, })
        ]}
        w-full mt="40px">
        <CarouselContent>
          {caroulselData?.map((item, index) => (
            <CarouselItem key={index}>
              <div select-none relative>
                <p absolute mt="93px" ml="40px" text="88px" not-italic font-bold leading="96px" className='text-[#D9D9D9]'>{item?.title}</p>
                <img w-full rounded-2xl h="420px" object-cover src={item?.img} alt="Main background images" />
                <p absolute bottom-0>{item?.percent}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Home
