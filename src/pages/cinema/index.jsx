import React from "react";
import { StarIcon2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ScrollToTop from "@/components/ScrollToTop";

const Cinema = () => {
  const { t, i18n } = useTranslation();

  const generateDates = (startDate, numberOfDays) => {
    return Array.from({ length: numberOfDays }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
  };

  const today = new Date();
  const availableDates = generateDates(today, 9);

  const [selectedDate, setSelectedDate] = React.useState(today);

  const formatDateLabel = (date) => {
    const todayDate = new Date().toDateString();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(today.getDate() + 1);
    const tomorrowString = tomorrowDate.toDateString();

    if (date.toDateString() === todayDate) {
      return t("today");
    } else if (date.toDateString() === tomorrowString) {
      return t("tomorrow");
    } else {
      return new Intl.DateTimeFormat(i18n.language, {
        day: "2-digit",
        month: "short",
      }).format(date);
    }
  };

  return (
    <div>
      <ScrollToTop />
      <div className="flex items-center gap-4">
        <Button variant="outline" className="w-[52px] h-[52px] p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-label={t("back")}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </Button>
        <p className="text-2xl font-medium">{t("back")}</p>
      </div>
      <div className="mt-10 flex items-start gap-7 border-b pb-8">
        <img
          width={528}
          height={640}
          className="rounded-2xl"
          src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
          alt={t("interstellar poster")}
        />
        <div>
          <h2 className="text-4xl font-bold">Interstellar</h2>
          <div className="flex text-xl font-medium items-center gap-1 mt-5">
            <StarIcon2 /> <span>8.6</span>
          </div>
          <p className="flex font-medium items-center text-xl mt-4 gap-2">
            {t("year")}: <span className="text-[#666666]">2022</span>
          </p>
          <p className="flex font-medium items-center text-xl mt-4 gap-2">
            {t("genre")}: <span className="text-[#666666]">Epic fantasy</span>
          </p>
          <p className="flex font-medium items-center text-xl mt-4 gap-2">
            {t("time")}: <span className="text-[#666666]">1h 22m</span>
          </p>
          <p className="text-xl mt-4 text-primary font-medium cursor-pointer">
            {t("reviews", { count: 198 })}
          </p>
          <p className="mt-4 text-[20px]">{t("description")}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-10">
        {availableDates.map((item) => (
          <Button
            key={item.toISOString()}
            className={`px-8 py-5 rounded-xl border-1 ${
              selectedDate.toDateString() === item.toDateString()
                ? "bg-primary text-white hover:bg-primary border-transparent hover:text-white"
                : "bg-white text-black"
            }`}
            variant="outline"
            onClick={() => setSelectedDate(item)}
          >
            <p className="text-xl font-medium">{formatDateLabel(item)}</p>
          </Button>
        ))}
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 256 256"
          aria-label={t("refresh")}
        >
          <path
            fill="#03559E"
            d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"
          />
        </svg>
      </div>
    </div>
  );
};

export default Cinema;
