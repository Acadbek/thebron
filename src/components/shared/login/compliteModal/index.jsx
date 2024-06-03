import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { DialogContent } from '@/components/ui/dialog'
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";



const index = () => {

    

    return (
        <div>
            <DialogContent XIcon={false} className="sm:w-[420px] sm:py-[24px] sm:px-[20px]">
                <div>
                    <h6 className='sm:text-black sm:text-lg sm:not-italic sm:font-bold sm:leading-6'>Завершить регистрацию</h6>
                    <div className="sm:mt-[20px] border rounded-[10px] overflow-hidden">
                        <Input type="text" placeholder="Имя" className="border-none py-[25px] px-[16px]" />
                        <Input type="text" placeholder="Фамилия" className="py-[25px] px-[16px] border-b-none" />
                    </div>
                    <p className='text-gray-800 sm:text-sm sm:not-italic sm:font-normal sm:leading-5 mt-[15px]'>Имя должно совпадать с данными в удостоверении личности.</p>

                    <div className='mt-[15px]'>

                        <p className='text-gray-800 text-sm not-italic font-normal leading-5'>Минимальный возрасть для регистрации: 18 лет. Другие пользователи не могут удидеть дату вашего рождения</p>
                    </div>

                    <div className='mt-[15px]'>
                        <Input type="email" placeholder="Email" className="py-[25px]"  />
                        <p className='sm:text-gray-800 sm:text-sm sm:not-italic sm:font-normal sm:leading-5'>Мы отправим потверждение и квитанцию вам на почту</p>
                    </div>
                    <p className='text-[#222] text-xs not-italic font-normal leading-4 mt-[20px]'>
                        Нажимая  <span className='text-xs not-italic font-extrabold leading-4'>Согласиться и продолжить,</span> я принимаю следующие документы theBron:
                        <span className='text-blue-700 text-xs not-italic font-semibold leading-4 underline'>Условия предоставления услуг, Условия обработки платежей, и Политика конфиденциальности.</span>
                    </p>
                    <button className="mt-[15px] text-white bg-blue-600 w-full rounded-md py-[12px]">
                        Согласиться и продолжить
                    </button>
                    <div className='w-full h-[1px] bg-[#E0E0E0] my-[15px]'></div>
                    <p className='text-black text-sm not-italic font-normal leading-5'>
                        theBron будет отправлять вам эксклюзивные предложения, идеи, рекламные письма и push-оповещения.
                        Вы можете отказаться от них в настройках аккаунта или в маркетинговом уведомлении
                    </p>

                    <div className='mt-[15px]'>
                        <RadioGroup className="gap-0 border-none">
                            <Label htmlFor="terms" className="radio-checkbox flex cursor-pointer items-center justify-between space-x-2 ">
                                <Checkbox id="terms" />
                                <p className='text-black text-base not-italic font-normal leading-3'>Я не хочу получать рекламные сообщения от <span className='text-blue-700 text-base not-italic font-normal leading-6'> theBron</span></p>
                            </Label>
                        </RadioGroup>
                    </div>
                </div>
            </DialogContent>
        </div>
    )
}

export default index