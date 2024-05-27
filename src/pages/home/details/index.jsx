import React, { useEffect } from 'react'
// import img1 from '@/assets/images/image1.png'
// import img2 from '@/assets/images/image2.png'
// import userImg from '@/assets/images/userImg.png'
// import starIcon from '@/assets/icons/starIcon.svg'
// import wifiIcon from '@/assets/icons/wifiIcon.svg'
// import DoorOpenIcon from '@/assets/icons/DoorOpenIcon.svg'
// import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon.svg'
// import CaretRightIcon from '@/assets/icons/CaretRightIcon.svg'
import { useLazyGetResortByIdQuery } from '@/features/resort'

const DetailsPage = () => {

  const [getResort, { data, isLoading }] = useLazyGetResortByIdQuery();

  useEffect(() => {
    getResort()
  }, [])

  return (
    <div>
      Details
      {/* <div>
        {JSON.stringify(data)}
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

      <div flex items-start justify-between border mt="40px" w="100%" className=' '>
        <div border w="950px">
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

          <div w="100%" h="1px" bg="black" my="40px"></div>

          <div flex items-center gap="16px">
            <img src={userImg} alt="user img" w="60px" h="60px" />
            <div>
              <h6 text="18px" font="700">Хозяин: Grigory Ishuk</h6>
              <p text="16px" font="400px">5 лет принимает гостей</p>
            </div>
          </div>

          <div w="100%" h="1px" bg="black" my="40px"></div>

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
        </div>

        <div>
          srrs
        </div>
      </div> */}
    </div>
  )
}

export default DetailsPage
