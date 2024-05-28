import React, { useEffect, useRef, useState } from 'react'
import { useGetResortByIDQuery } from '@/features/resort'
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DetailsPage = () => {
  const { id } = useParams()
  const { data: resort } = useGetResortByIDQuery(id)
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  useEffect(() => {
    // getResort()
  }, [])

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div w="90%" max-w="1800px" mx-auto mt-0 px-6>
      Details
      <div>
        <h6 text="28px">{resort?.name}</h6>
        <div flex items-start gap="30px" mt="40px">
          <img object-cover src={resort?.images[0]?.img} alt="img" w="810px" h="416px" />
          <div className='flex gap-[30px] '>
            <div flex flex-col gap="17px">
              <img object-cover src={resort?.images[1]?.img} alt="img" w="390px" h="199px" />
              <img object-cover src={resort?.images[2]?.img} alt="img" w="390px" h="199px" />
            </div>
            <div flex flex-col gap="17px">
              <img object-cover src={resort?.images[3]?.img} alt="img" w="390px" h="199px" />
              <img object-cover src={resort?.images[4]?.img} alt="img" w="390px" h="199px" />
            </div>
          </div>
        </div>
      </div>

      <div flex items-start justify-between mt="40px" w="100%" className=' '>
        <div w="950px">
          <div flex flex-col gap="16px">
            <h6 text="24px" font="700">{resort?.name}</h6>
            <p flex gap-3 items-center><span>{resort?.amenities[0]?.name}</span> <span>{resort?.amenities[1]?.name}</span> <span>{resort?.amenities[2]?.name}</span> <span>{resort?.amenities[3]?.name}</span> </p>
            <div flex items-center gap="8px">
              <span flex items-center gap="8px" font="500">
                {/* <img src={starIcon} alt="icon" /> */}
                4.6
              </span>
              <p text="16px" font="700">24 отзыва</p>
            </div>
          </div>

          <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>

          <div flex items-center gap="16px">
            {/* <img src={userImg} alt="user img" w="60px" h="60px" /> */}
            <div>
              <h6 text="18px" font="700">Хозяин: Grigory Ishuk</h6>
              <p text="16px" mt-1 font="400px">5 лет принимает гостей</p>
            </div>
          </div>

          <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>

          <div flex flex-col gap="16px">
            <div flex items-center gap="16px">
              {/* <img src={wifiIcon} alt="wifi icon" w="24px" h="24px" /> */}
              <div>
                <h6 text="18px" font="700">Быстрый Wi-Fi </h6>
                <p mt-1 text="16px" font="400">На скорости 235 Мбит/с вы можете принимать видео звонки и транслировать видео для всей группы</p>
              </div>
            </div>
            <div flex items-center gap="16px">
              {/* <img src={CalendarBlankIcon} alt="" w="24px" h="24px" /> */}
              <h6 text="18px" font="700">Беспоатная отмена в течение 48 часов</h6>
            </div>
            <div flex items-center gap="16px">
              {/* <img src={DoorOpenIcon} alt="" w="24px" h="24px" /> */}
              <div>
                <h6 text="18px" font="700">Самостоятельное прибытие </h6>
                <p mt-1 text="16px" font="400">Вы заселитесь самостоятельно на двери умный звонок</p>
              </div>
            </div>
          </div>
          <div mt="40px">
            <p ref={textRef} className={expanded ? '' : 'line-clamp-4'} style={{ fontSize: '18px', fontWeight: 400 }}>
              Your long content goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae suscipit quaerat pariatur explicabo id blanditiis modi minima nihil unde nam corrupti vitae natus velit ratione facere sed laborum aliquam, dolores cum. Illum fugit numquam deserunt dicta magni ea in, voluptatibus esse aut illo accusantium, dolores ipsum blanditiis labore quos, autem culpa ut soluta accusamus cupiditate? Quia, aspernatur consectetur temporibus laborum beatae cum asperiores soluta vero illum officiis voluptate esse odio neque, velit deserunt, excepturi amet itaque autem repudiandae iure quae? Facilis laboriosam quas necessitatibus incidunt, obcaecati alias quidem itaque vero dignissimos eius consectetur fugiat, doloribus delectus nisi et exercitationem!
            </p>
            <button onClick={toggleReadMore} className="flex items-center justify-center gap-4 mt-4 text-lg font-bold underline">
              {expanded ? 'Скрыть' : 'Показать ещё'}
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.43 10.4422L11.1605 16.6922C11.0837 16.7503 10.9925 16.7963 10.8921 16.8278C10.7917 16.8592 10.6841 16.8754 10.5755 16.8754C10.4668 16.8754 10.3592 16.8592 10.2588 16.8278C10.1584 16.7963 10.0672 16.7503 9.99039 16.6922C9.91356 16.6341 9.85261 16.5652 9.81103 16.4893C9.76945 16.4135 9.74805 16.3321 9.74805 16.25C9.74805 16.1679 9.76945 16.0866 9.81103 16.0107C9.85261 15.9348 9.91356 15.8659 9.99039 15.8078L17.6759 10L9.99039 4.1922C9.83522 4.07492 9.74805 3.91586 9.74805 3.75001C9.74805 3.58416 9.83522 3.4251 9.99039 3.30782C10.1456 3.19055 10.356 3.12466 10.5755 3.12466C10.7949 3.12466 11.0054 3.19055 11.1605 3.30782L19.43 9.55782C19.5069 9.61587 19.5679 9.6848 19.6095 9.76067C19.6511 9.83655 19.6726 9.91788 19.6726 10C19.6726 10.0821 19.6511 10.1635 19.6095 10.2393C19.5679 10.3152 19.5069 10.3842 19.43 10.4422Z" fill="#343330" />
              </svg>
            </button>
          </div>
          <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>
          <Carousel relative>
            <div absolute right="40px">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            <p absolute top="-14px" text-xl not-italic font-bold>Где вы будете спать</p>
            <CarouselContent mt="40px">
              {resort?.images?.map((item, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <img object-cover height={264} src={item?.img} alt="Home img" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div flex gap="30px" mt="40px">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>
        </div>

        <div sticky top-8>
          <Card>
            <CardHeader>
              <p text-2xl py-0 font-bold>{resort?.daily_price}сум <span text-2xl font-normal>ночь</span></p>
            </CardHeader>
            <CardContent>
              <CardDescription mb-1>Прибытие | Выезд</CardDescription>
              <div className={cn("grid gap-2")}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 mr-[50px]" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <CardDescription mt-2 mb-1>Для кого</CardDescription>
              <Select>
                <SelectTrigger className="w-full bt-none">
                  <SelectValue placeholder="1 гость" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>гость</SelectLabel>
                    <SelectItem value="apple">2 гость</SelectItem>
                    <SelectItem value="banana">3 гость</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button w-full mt="24px">Submit</Button>
              <ul>
                <li flex items-center justify-between mt="32px">
                  <span underline>125 000сум x5 </span>
                  <span>625 000сум</span>
                </li>
                <li flex items-center justify-between mt="16px">
                  <span underline>1Плата за уборку</span>
                  <span>100 000cум</span>
                </li>
                <li flex items-center justify-between mt="16px">
                  <span underline>Сервисный сбор thebron</span>
                  <span>20 000сум</span>
                </li>
              </ul>
              <div w="100%" h="1px" bg="#EDEDED" mb="24px" mt="32px"></div>
              <p text-2xl not-italic font-semibold leading-5 flex items-center justify-between>Всего(без учета) <span text-right text-2xl not-italic font-bold leading-5>745 000сум</span></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
