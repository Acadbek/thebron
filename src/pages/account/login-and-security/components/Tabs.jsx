import React from "react";
import { TabContext } from "../context";

export const Tabs = () => {
  const { tab, changeTab } = React.useContext(TabContext);

  const handelClick = (e) => {
    changeTab(parseInt(e.target.dataset.v));
  };
  return (
    <ul className="flex items-center gap-8 border-b">
      <li
        style={{ borderColor: tab === 1 && "#03559E" }}
        onClick={(e) => handelClick(e)}
        data-v="1"
        className="cursor-pointer font-medium pr-4 pt-2 pb-2 text-left border-b-2 border-transparent"
      >
        Войти
      </li>
      <li
        style={{ borderColor: tab === 2 && "#03559E" }}
        onClick={(e) => handelClick(e)}
        data-v="2"
        className="cursor-pointer pr-4 pb-2 py-2 font-medium border-b-2 border-transparent"
      >
        Запросы на вход
      </li>
      <li
        style={{ borderColor: tab === 3 && "#03559E" }}
        onClick={(e) => handelClick(e)}
        data-v="3"
        className="cursor-pointer pr-4 pb-2 py-2 border-b-2 font-medium border-transparent"
      >
        Совместный доступ
      </li>
    </ul>
  );
};
