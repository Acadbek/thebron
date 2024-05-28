import React  from 'react'
import img1 from '@/assets/images/image1.png'
import img2 from '@/assets/images/image2.png'
import userImg from '@/assets/images/userImg.png'
import starIcon from '@/assets/icons/starIcon.svg'
import wifiIcon from '@/assets/icons/wifiIcon.svg'
import DoorOpenIcon from '@/assets/icons/DoorOpenIcon.svg'
import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon.svg'
import CaretRightIcon from '@/assets/icons/CaretRightIcon.svg'
import VectorIcon from '@/assets/icons/VectorIcon.svg'
import ReviewCard from "@/components/shared/review-card/index"

import { Progress } from "@/components/ui/progress"
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

  // const [getResort, { data, isLoading }] = useLazyGetResortByIdQuery();
  // useEffect(() => {
  //   getResort()
  // }, [])






  const [progress1, setProgress1] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress1(66), 500)
    return () => clearTimeout(timer)
  }, [])


  const [progress2, setProgress2] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress2(40), 500)
    return () => clearTimeout(timer)
  }, [])
  const [progress3, setProgress3] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress3(30), 500)
    return () => clearTimeout(timer)
  }, [])
  const [progress4, setProgress4] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress4(10), 500)
    return () => clearTimeout(timer)
  }, [])


  const data = [
    {
      img: userImg,
      name: "Sven",
      state: "Германия",
      date: "август 2023 г.",
      title: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
      term: "Срок аренды - Около недели",
    },
    {
      img: userImg,
      name: "Sven",
      state: "Германия",
      date: "август 2023 г.",
      title: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
      term: "Срок аренды - Около недели",
    },
    {
      img: userImg,
      name: "Sven",
      state: "Германия",
      date: "август 2023 г.",
      title: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
      term: "Срок аренды - Около недели",
    },
    {
      img: userImg,
      name: "Sven",
      state: "Германия",
      date: "август 2023 г.",
      title: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. C",
      term: "Срок аренды - Около недели",
    },
  ]


  return (
    <div>
      {/* Details */}
      <div>
        {/* {JSON.stringify(data)} */}
        <h6 text="28px">Линнеахольме частный остров до которого можно добраться по пешеходному мосту</h6>
        <div flex items-start gap="30px" mt="40px">
          <img src={img1} alt="img" w="810px" h="416px" />
          <div className='flex gap-[30px] '>
            <div flex flex-col gap="17px">
              <img src={img2} alt="img" w="390px" h="199px" />
              <img src={img2} alt="img" w="390px" h="199px" />
            </div>
            <div flex flex-col gap="17px">
              <img src={img2} alt="img" w="390px" h="199px" />
              <img src={img2} alt="img" w="390px" h="199px" />
            </div>
          </div>
        </div>
      </div>

      <div flex items-start justify-between mt="40px" w="100%">
        <div w="950px">
          <div flex flex-col gap="16px">
            <h6 text="24px" font="700">Title</h6>
            <p><span text="18px">10 гостей </span> <span>6 спален</span> <span>8 кроватей</span> <span>2 ванные</span> </p>
            <div flex items-center gap="8px">
              <span flex items-center gap="8px" font="500">
                <img src={starIcon} alt="icon" />
                4.6
              </span>
              <p text="16px" font="700">24 отзыва</p>
            </div>
          </div>

          <div w="100%" h="1px" bg="D9D9D9" my="40px"></div>

          <div flex items-center gap="16px">
            <img src={userImg} alt="user img" w="60px" h="60px" />
            <div>
              <h6 text="18px" font="700">Хозяин: Grigory Ishuk</h6>
              <p text="16px" font="400px">5 лет принимает гостей</p>
            </div>
          </div>

          <div w="100%" h="1px" bg="D9D9D9" my="40px"></div>

          <div flex flex-col gap="16px">
            <div flex items-center gap="16px">
              <img src={wifiIcon} alt="wifi icon" w="24px" h="24px" />
              <div>
                <h6 text="18px" font="700">Быстрый Wi-Fi </h6>
                <p text="16px" font="400">На скорости 235 Мбит/с вы можете принимать видео звонки и транслировать видео для всей группы</p>
              </div>
            </div>
            <div flex items-center gap="16px">
              <img src={CalendarBlankIcon} alt="" w="24px" h="24px" />
              <h6 text="18px" font="700">Беспоатная отмена в течение 48 часов</h6>
            </div>
            <div flex items-center gap="16px">
              <img src={DoorOpenIcon} alt="" w="24px" h="24px" />
              <div>
                <h6 text="18px" font="700">Самостоятельное прибытие </h6>
                <p text="16px" font="400">Вы заселитесь самостоятельно на двери умный звонок</p>
              </div>
            </div>
          </div>
          <div mt="40px" >
            <p text="18px" font="400">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...</p>
            <span flex items-center gap="10px" text="18px" font="700" mt="20px">Показать ещё <img src={CaretRightIcon} alt="" w="26px" h="20px" /> </span>
          </div>

          <div w="100%" h="1px" bg="D9D9D9" my="40px"></div>
        </div>

        <div w="530px" h="590px" py="40px" px="20px" border rounded-md >
          <h6 text="24px" font="700" leading="32px">125 000сум <span text="24px" font="400" leading="32px">ночь</span></h6>
          <div flex flex-col w="490px" h="159px" py="12px" px="16px" mt="24px" border rouded="">
            <div flex >
              <div w="50%" h="82px" py="12px" px="16px" border>
                <h6 font="700" text="18px" leading="24px">Прибытие</h6>
                <p font="400" text="18px" leading="24px" mt="8px">09.03.2024</p>
              </div>
              <div w="50%" h="82px" py="12px" px="16px" border>
                <h6 font="700" text="18px" leading="24px">Прибытие</h6>
                <p font="400" text="18px" leading="24px" mt="8px">09.03.2024</p>
              </div>
            </div>
            <div >
              <Select>
                <SelectTrigger className=" rounded-none "  >
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">
                      Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                    <SelectItem value="ist_indonesia">
                      Indonesia Central Standard Time (WITA)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                      Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                      Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                      Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

        </div>
      </div>

      <div w="100%" h="1px" bg="#D9D9D9" my="40px"></div>

      <div flex gap="62px">
        <div>
          <h6 text="18px" font="700" leading="20px">Общая оценка</h6>
          <div w="249px" mt="10px" flex flex-col gap="8px" >
            <div flex items-center gap="10px">
              <h6>5</h6>
              <Progress value={progress1} className="w-[100%]" />
            </div>
            <div flex items-center gap="10px">
              <h6>4</h6>
              <Progress value={progress2} className="w-[100%]" />
            </div>
            <div flex items-center gap="10px">
              <h6>3</h6>
              <Progress value={progress3} className="w-[100%]" />
            </div>
            <div flex items-center gap="10px">
              <h6>2</h6>
              <Progress value={progress4} className="w-[100%]" />
            </div>
          </div>
        </div>

        <div w="1px" h="176px" bg="#D9D9D9"></div>

        <div flex flex-col items-center gap="26px" w="110px">
          <h6 text="18px" font="700" leading="20px">Чистота</h6>
          <p text="18px" font="700" leading="20px">4.7</p>
          <img src={VectorIcon} alt="" w="38px" h="38px" />
        </div>
        <div w="1px" h="176px" bg="#D9D9D9"></div>
        <div flex flex-col items-center gap="26px" w="110px">
          <h6 text="18px" font="700" leading="20px">Чистота</h6>
          <p text="18px" font="700" leading="20px">4.7</p>
          <img src={VectorIcon} alt="" w="38px" h="38px" />
        </div>
        <div w="1px" h="176px" bg="#D9D9D9"></div>
        <div flex flex-col items-center gap="26px" w="110px">
          <h6 text="18px" font="700" leading="20px">Чистота</h6>
          <p text="18px" font="700" leading="20px">4.7</p>
          <img src={VectorIcon} alt="" w="38px" h="38px" />
        </div>
        <div w="1px" h="176px" bg="#D9D9D9"></div>
        <div flex flex-col items-center gap="26px" w="110px">
          <h6 text="18px" font="700" leading="20px">Чистота</h6>
          <p text="18px" font="700" leading="20px">4.7</p>
          <img src={VectorIcon} alt="" w="38px" h="38px" />
        </div>
        <div w="1px" h="176px" bg="#D9D9D9"></div>
        <div flex flex-col items-center gap="26px" w="110px">
          <h6 text="18px" font="700" leading="20px">Местоположение</h6>
          <p text="18px" font="700" leading="20px">4.7</p>
          <img src={VectorIcon} alt="" w="38px" h="38px" />
        </div>
        <div w="1px" h="176px" bg="#D9D9D9"></div>
        <div flex flex-col items-center w="110px" gap="26px">
          <h6 text="18px" font="700" leading="20px">Соотношение/цена качество</h6>
          <p text="18px" font="700" leading="20px">4.7</p>
          <img src={VectorIcon} alt="" w="38px" h="38px" />
        </div>

      </div>

      <div flex flex-wrap justify-between>
        {
          data?.map(item => (
            <ReviewCard item={item} />
          ))
        }
      </div>

    </div>
  )
}

export default DetailsPage
