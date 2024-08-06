import { Button } from "@/components/ui/button";

export const PersonalInfoSetting = () => {
  return (
    <>
      <div className="flex items-center justify-between pb-6 border-b mt-10">
        <div>
          <p className="mb-2 font-medium">Имя по документам</p>
          <p className="text-[#7A7A7A]">Faxriddin Mutalov</p>
        </div>
        <Button variant="ghost">Редактировать</Button>
      </div>
      <div className="flex items-center justify-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">Электронный адрес</p>
          <p className="text-[#7A7A7A]">workmulatov@gmail.com</p>
        </div>
        <Button variant="ghost">Редактировать</Button>
      </div>
      <div className="flex items-center justify-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">Номера телефонов</p>
          <p className="text-[#7A7A7A]">
            Укажите телефон, чтобы с вами могли связаться theBron и гости по
            потвержденным бронированиям. Можно добавить другие номера и указать
            их назначения.
          </p>
        </div>
        <Button variant="ghost">Добавить</Button>
      </div>
      <div className="flex items-center justify-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">
            Удостоверение личности государственного образца
          </p>
          <p className="text-[#7A7A7A]">Нет данных</p>
        </div>
        <Button variant="ghost">Добавить</Button>
      </div>
      <div className="flex items-center justify-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">Адрес</p>
          <p className="text-[#7A7A7A]">Нет данных</p>
        </div>
        <Button variant="ghost">Редактировать</Button>
      </div>
      <div className="flex items-center justify-between pb-6 border-b mt-6">
        <div>
          <p className="mb-2 font-medium">
            Контактное лицо в чрезвычайные ситуации
          </p>
          <p className="text-[#7A7A7A]">Нет данных</p>
        </div>
        <Button variant="ghost">Редактировать</Button>
      </div>
    </>
  );
};

export default PersonalInfoSetting;
