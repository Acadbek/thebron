import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppleIcon from "@/assets/icons/appleIcon.svg";
import GoogleIcon from "@/assets/icons/googleIcon.svg";
import FaceboolIcon from "@/assets/icons/facebookIcon.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const AuthModal = () => {
  return (
    <DialogContent flex items-center justify-center flex-col max-w="530px" px="24px">
      <div text="center">
        <h6 font="600" text="28px" leading="36px">Добро пожаловать в <span text="#03559E">theBron</span></h6>
        <p text='18px' font="500" leading="24px" mt="12px">Войдите или зарегистрируйтесь</p>
      </div>
      <form>
        <div className="grid gap-4 py-4">
          <div>
            <div >
              <Select>
                <SelectTrigger py="26px" rounded-none >
                  <h6 text="16px" font="700" leading="24px">Uzb <span text="16px" font="400" leading="24px">(+998)</span> </h6>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* <Input type="email" placeholder="Номер телефона" py="26px" font="400" text="16px0" leading="24px" rounded-none /> */}
              {/* <InputMask
                mask="+\9\98 (99) 999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              >
                {(inputProps) => <input {...inputProps} type="email" placeholder="Номер телефона" />}
              </InputMask> */}
            </div>
            <p text="#454545" font="400" leading="20px" mt="11px" className=" text-[14px]"  >
              Мы позвоним вам или отправим SMS, чтобы подтвердить номер телефона. Применяются стандартные условия вашего
              тарифа на прием сообщений и передачу данных. <span text="#454545" font="400" leading="20px" text-xs underline> Политика конфиденциальности</span>
            </p>
          </div>
          <button my="20px" text="#fff" text-sm bg="#03559E" rounded="10px" py="12px">Продолжить</button>
          <div flex items-center gap="16px" w-full>
            <div w="100%" h="0.5px" bg="#666666"></div>
            <h6 text="#666666" text-xs font="400" leading="24px">или</h6>
            <div w="100%" h="0.5px" bg="#666666" ></div>
          </div>

          <div flex flex-col gap="16px">
            <div flex items-center gap="4px" rounded="8px" w="100%" border p="12px" >
              <img src={GoogleIcon} alt="" w="20px" h="20px" />
              <h6 text-xs font-bold leading="24px" w-full text="center">С помощью Google</h6>
            </div>
            <div flex items-center gap="4px" rounded="8px" w="100%" border p="12px" >
              <img src={FaceboolIcon} alt="" w="20px" h="20px" />
              <h6 text-xs font-bold leading="24px" w-full text="center">С помощью Facebook</h6>
            </div>
            <div flex items-center gap="4px" rounded="8px" w="100%" border p="12px" >
              <img src={AppleIcon} alt="" w="24px" h="24px" />
              <h6 text-xs font-bold leading="24px" w-full text="center">Продолжить с Apple</h6>
            </div>
          </div>
        </div>
      </form>
    </DialogContent>
  );
};

export default AuthModal;
