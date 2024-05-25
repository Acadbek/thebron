import { NavLink } from "react-router-dom";
import { ModeToggle } from "../toggle-theme";
import { useTranslation } from "react-i18next";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import globus from '@/assets/icons/globus.svg'

const Header = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('Uzbekcha')

  const changeLanguage = (e, lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(e.target.textContent)
  };

  return (
    <nav border py-2 flex items-center justify-between>
      <div>
        <ModeToggle />
      </div>
      <div flex gap-4>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button flex flex-col variant="ghost" size="icon">
            <img src={globus} alt="" />
            {currentLang}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={(e) => changeLanguage(e, "uz")}>
            Uzbekcha
          </DropdownMenuItem>
          <DropdownMenuItem onClick={(e) => changeLanguage(e, "ru")}>
            Русский
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

export default Header;
