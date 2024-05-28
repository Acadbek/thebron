import React from 'react'
import starIcon2 from "@/assets/icons/starIcon2.svg"
import CaretRightIcon from "@/assets/icons/CaretRightIcon.svg"

const index = ({ item }) => {
  return (
    <div my="50px">
      <div flex items-center gap="24px">
        <img src={item?.img} alt="" w="72px" h="72px" />
        <div flex flex-col gap="8px">
          <h6 text="18px" font-bold>{item?.name}</h6>
          <p text="18px" font="400">{item.state}</p>
        </div>
      </div>
      <div flex items-center gap="16px" mt="16px">
        <div flex items-center gap="2px" >
          <img src={starIcon2} alt="" w="18px" h="17px" />
          <img src={starIcon2} alt="" w="18px" h="17px" />
          <img src={starIcon2} alt="" w="18px" h="17px" />
          <img src={starIcon2} alt="" w="18px" h="17px" />
          <img src={starIcon2} alt="" w="18px" h="17px" />
        </div>
        <h6>{item.date}</h6>
        <p>{item.term}</p>
      </div>
      <p mt="16px" font="500" leading="20px">{item.term}</p>
      <div mt="16px">
        <p text="18px" leading="24px" max-w="812px">{item.title}</p>
        <div flex items-center gap="8px" mt="12px" cursor-pointer>
          <h6 font="700" text="18px" leading="24px" >Показать ещё</h6>
          <img src={CaretRightIcon} alt="" mt="2px" />
        </div>
      </div>
    </div>
  )
}

export default index