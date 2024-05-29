import { CaretRightIcon, StarIcon2 } from '@/assets/icons'

const ReviewCard = ({ item }) => {
  return (
    <div my="50px">
      <div flex items-center gap="24px">
        <img rounded-full src={item?.img} alt="" w="72px" h="72px" />
        <div flex flex-col gap="8px">
          <h6 text-lg not-italic font-bold text="18px" font-bold>{item?.name}</h6>
          <p text-lg not-italic font-normal text="18px" font="400">{item?.location}</p>
        </div>
      </div>
      <div flex items-center gap="16px" mt="16px">
        <div flex items-center gap="2px">
          <StarIcon2 />
          <StarIcon2 />
          <StarIcon2 />
          <StarIcon2 />
          <StarIcon2 />
        </div>
        <h6>{item?.date}</h6>
        <p text-base not-italic font-medium text="#a29f9f">{item?.term}</p>
      </div>
      <p mt="16px" font="500" leading="20px">{item?.term}</p>
      <div mt="16px">
        <p text-lg not-italic font-normal text="18px" leading="24px" max-w="812px">{item?.title}</p>
        <div flex items-center gap="8px" mt="12px" cursor-pointer>
          <h6 font="700" text="18px" leading="24px">Показать ещё</h6>
          <CaretRightIcon />
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
