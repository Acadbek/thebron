import { ArrowLeftIcon, XIcon, MessageIcon, PhoneIcon } from "@/assets/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRef, useState } from "react";

const AuthModal = ({ setOpenModal, setIsOpen }) => {
  const [chooseModal, setChooseModal] = useState(1);

  const handleModalChange = (value) => {
    setChooseModal(value);
  };
  const changeModal = () => {
    setOpenModal(false)
  }
  const changeBackModal = () => {
    setChooseModal(1);
  }
  const changeIsModal = () => {
    setIsOpen(true);
    setOpenModal(false)

  }

  const [confirmationCode, setConfirmationCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const newConfirmationCode = [...confirmationCode];
    newConfirmationCode[index] = e.target.value;
    setConfirmationCode(newConfirmationCode);

    if (e.target.value.length === 1 && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && confirmationCode[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {chooseModal === 1 && (
        <DialogContent XIcon={false} className="sm:w-[420px] sm:py-[44px]">
          <div>
            <div className="flex items-center justify-between">
              <span onClick={changeIsModal} className="cursor-pointer"><ArrowLeftIcon /></span>
              <span onClick={changeModal} className="cursor-pointer"><XIcon /></span>
            </div>
            <div className="sm:mt-[20px]">
              <h6 className="text-black text-2xl font-bold leading-9">Введите код</h6>
              <p className="text-black text-[16px] font-medium leading-5 mt-[10px]">
                Для подтверждения телефона отправили 4 значный код на{" "}
                <span className="font-bold">+998(90) 115 92 34</span>
              </p>
            </div>

            <div className="flex items-center justify-between my-[24px]">
              {confirmationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-lg text-center bg-gray-200 rounded-md border-none"
                />
              ))}
            </div>

            <p className="text-gray-600 text-center text-base">Если код не придет, то можно получить новый через 51 сек</p>
            <button
              onClick={() => handleModalChange(1)}
              className="mt-4 text-white bg-blue-600 w-full rounded-md py-2"
            >
              Продолжить
            </button>

            <p
              onClick={() => handleModalChange(2)}
              className="mt-6 text-black text-center text-lg font-bold underline cursor-pointer"
            >
              Другие варианты
            </p>
          </div>
        </DialogContent>
      )}
      {chooseModal === 2 && (
        <DialogContent XIcon={false} className="sm:w-[420px] sm:px-[20px] sm:py-[24px]">
          <div className="flex items-center justify-between">
            <span onClick={changeBackModal} className=" cursor-pointer"><ArrowLeftIcon /></span>
            <span onClick={changeModal} className="cursor-pointer"><XIcon /></span>
          </div>
          <div>
            <h6 className="text-black text-[28px] font-semibold leading-9">Другие варианты</h6>
            <p className="text-black text-lg font-medium leading-6 mt-[12px]">
              Выберите другой способ получить код на{" "}
              <span className="font-bold">+998(90) 115 92 34</span>
            </p>
          </div>

          <div className="sm:my-[24px]">
            <RadioGroup className="gap-0 border-none">
              <Label htmlFor="r1" className="radio-checkbox flex cursor-pointer items-center space-x-2 justify-between ">
                <div flex flex-col>
                  <div className="flex items-center gap-[17px]">
                    <MessageIcon />
                    <div>
                      <h6 className="text-black text-lg font-bold leading-6">SMS</h6>
                      <p className="text-gray-600 text-base leading-6 mt-[4px]">Мы отправим вам код</p>
                    </div>
                  </div>
                </div>
                <RadioGroupItem
                  className="w-[24px] h-[24px]"
                  value="1"
                  id="r1" />
              </Label>

              <div className="bg-[#E0E0E0] w-full h-[1px]"></div>

              <Label htmlFor="r2" className="radio-checkbox flex cursor-pointer items-center justify-between space-x-2 ">
                <div flex flex-col gap="8px">
                  <div className="flex items-center gap-[17px]">
                    <PhoneIcon />
                    <div>
                      <h6 className="text-black text-lg font-bold leading-6">Телефонный звонок</h6>
                      <p className="text-gray-600 text-base leading-6 mt-[4px]">Мы позвоним и сообщим код</p>
                    </div>
                  </div>
                </div>
                <RadioGroupItem
                  className="w-[24px] h-[24px]"
                  value="2"
                  id="r2" />
              </Label>
            </RadioGroup>
          </div>

          <button className="mt-4 text-white bg-blue-600 w-full rounded-md py-2">
            Отправить код ещё раз
          </button>
        </DialogContent>
      )}
    </div>
  );
};

export default AuthModal;

