import { DialogContent } from "@/components/ui/dialog"
// import AppleIcon from "@/assets/icons/appleIcon.svg";
// import GoogleIcon from "@/assets/icons/googleIcon.svg";
// import FaceboolIcon from "@/assets/icons/facebookIcon.svg";
import { AppleIcon } from "@/assets/icons";
import { GoogleIcon } from "@/assets/icons";
import { FacebookIcon } from "@/assets/icons";
import { X } from "lucide-react"

import InputMask from 'react-input-mask';
import React from "react";
const AuthModal = () => {

  const [phone, setPhone] = React.useState('');

  return (
    <DialogContent flex items-center justify-center flex-col rounded="20px" h="698px" w="450px"  sm:w="349px"  >
      <div text="center">
        <h6 font="600" text="26px" leading="30px" sm:text="start" text-2xl font-bold leading-9>Добро пожаловать в <span text="#03559E">theBron</span></h6>
        <p text='16px' font="500" leading="24px" mt="8px">Войдите или зарегистрируйтесь</p>
      </div>

      <X className=" hidden" />

      <form>
        <div className="grid gap-4 " >
            <div >
              <InputMask
                mask="+\9\98 99 999 99 99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} font="400" text="14px" leading="20px" p="12px" rounded="10px" w-full border outline-none sm-w="317px" >
                {(inputProps) => <input {...inputProps} type="text" placeholder="Номер телефона" />}
              </InputMask>
            </div>
            <p text="#454545" font="400" leading="20px" mt="10px" className=" text-[14px]" sm:text="center"  sm:px="30px" >
              Мы позвоним вам или отправим SMS, чтобы подтвердить номер телефона. Применяются стандартные условия вашего
              тарифа на прием сообщений и передачу данных. <span text-sm not-italic font-normal leading-5 underline> Политика конфиденциальности</span>
            </p>
          <button my="20px" text="#fff" text-sm bg="#03559E"  rounded="10px" py="10px" sm:w="317px" sm:mx-auto >Продолжить</button>

          <div flex items-center gap="16px" max-w-full >
            <div w="100%" h="0.5px" bg="#E0E0E0"></div>
            <h6 text="#666666" text-xs font="400" leading="24px">или</h6>
            <div w="100%" h="0.5px" bg="#E0E0E0" ></div>
          </div>

          <div flex flex-col gap="16px" sm:w="317px" sm:mx-auto>
            <div flex items-center gap="4px" rounded="8px" w="100%" border p="10px" >
              <GoogleIcon />
              <h6 text-xs font="600" leading="20px" w-full text="center">С помощью Google</h6>
            </div>
            <div flex items-center gap="4px" rounded="8px" w="100%" border p="10px" >
              <FacebookIcon />
              <h6 text-xs font="600" leading="20px" w-full text="center">С помощью Facebook</h6>
            </div>
            <div flex items-center gap="4px" rounded="8px" w="100%" border p="10px" >
              <AppleIcon />
              <h6 text-xs font="600" leading="20px" w-full text="center">Продолжить с Apple</h6>
            </div>
          </div>
        </div>
      </form>
    </DialogContent>
  );
};

export default AuthModal;
