import React from 'react'
import { Progress } from "@/components/ui/progress"
import { CeaningIcon } from '@/assets/icons'
const index = () => {

    const [progress1, setProgress1] = React.useState(13)
    const [progress2, setProgress2] = React.useState(13)
    const [progress3, setProgress3] = React.useState(13)
    const [progress4, setProgress4] = React.useState(13)


    React.useEffect(() => {
        const timer = setTimeout(() => setProgress1(70), 500)
        return () => clearTimeout(timer)
    }, [])
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress2(55), 500)
        return () => clearTimeout(timer)
    }, [])
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress3(40), 500)
        return () => clearTimeout(timer)
    }, [])
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress4(15), 500)
        return () => clearTimeout(timer)
    }, [])


    return (
        <div flex flex-col items-start   p="12px" gap="26px" mt="500px" className='sm:gap-[50px] sm:flex-row xl:gap-[39px] xl:flex-row   2xl:flex-row ' >
            <div w="249px"  >
                <h6 text-lg font-bold leading-5 text-center>Общая оценка</h6>
                <ul flex flex-col gap="8px" mt="16px">
                    <li flex items-center gap="5px">5<Progress value={progress1} className="w-[100%]" /></li>
                    <li flex items-center gap="5px">4<Progress value={progress2} className="w-[100%]" /></li>
                    <li flex items-center gap="5px">3<Progress value={progress3} className="w-[100%]" /></li>
                    <li flex items-center gap="5px">2<Progress value={progress4} className="w-[100%]" /></li>
                </ul>
            </div>

            <div className='flex  items-center overflow-x-scroll scrollbar-none  gap-[24px] w-full sm:flex-wrap sm:justify-between  sm:gap-[30px]  xl:justify-between xl:gap-[39px] 2xl:justify-between 2xl:gap-[61px] '>
                <div  className=' h-[176px] w-[1px] bg-[#D9D9D9] hidden sm:block md:block lg:block xl:block 2xl:block'  ></div>
                <div flex flex-col items-center flex-col-reverse  max-w="110px" gap="12px" sm:flex-col sm:gap="29px"  >
                    <h6 text-lg font-bold leading-5 text-left>Чистота</h6>
                    <p>4.7</p>
                    <CeaningIcon />
                </div>
                <div  className=' h-[176px] w-[1px] bg-[#D9D9D9] hidden sm:block md:block lg:block xl:block 2xl:block'  ></div>
                <div flex flex-col flex-col-reverse items-center max-w="110px" gap="12px" sm:flex-col sm:gap="29px">
                    <h6 text-lg font-bold leading-5 text-left>Чистота</h6>
                    <p>4.7</p>
                    <CeaningIcon />
                </div>
                <div  className=' h-[176px] w-[1px] bg-[#D9D9D9] hidden sm:block md:block lg:block xl:block 2xl:block'  ></div>
                <div flex flex-col items-center flex-col-reverse max-w="110px" gap="12px" sm:flex-col sm:gap="29px">
                    <h6 text-lg font-bold leading-5 text-left>Чистота</h6>
                    <p>4.7</p>
                    <CeaningIcon />
                </div>
                <div  className=' h-[176px] w-[1px] bg-[#D9D9D9] hidden sm:block md:block lg:block xl:block 2xl:block'  ></div>
                <div flex flex-col items-center flex-col-reverse max-w="110px" gap="12px" sm:flex-col sm:gap="29px">
                    <h6 text-lg font-bold leading-5 text-left>Чистота</h6>
                    <p>4.7</p>
                    <CeaningIcon />
                </div>
                <div  className=' h-[176px] w-[1px] bg-[#D9D9D9] hidden sm:block md:block lg:block xl:block 2xl:block'  ></div>
                <div flex flex-col items-center flex-col-reverse max-w="110px" gap="12px" sm:flex-col sm:gap="29px">
                    <h6 text-lg font-bold leading-5 text-left>Местоположение</h6>
                    <p>4.7</p>
                    <CeaningIcon />
                </div>
                <div  className=' h-[176px] w-[1px] bg-[#D9D9D9] hidden sm:block md:block lg:block xl:block 2xl:block'  ></div>
                <div flex flex-col items-center flex-col-reverse max-w="110px" gap="12px" sm:flex-col sm:gap="29px" className='xl:gap-[26px] 2xl:gap-[29px]'>
                    <h6 text-lg font-bold leading-5 text-left>Соотношение/цена качество</h6>
                    <p>4.7</p>
                    <CeaningIcon />
                </div>
            </div>

        </div>
    )
}

export default index