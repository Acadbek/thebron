import { NavLink } from "react-router-dom";
import { ModeToggle } from "../toggle-theme";
import { useTranslation } from "react-i18next";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import globus from '@/assets/icons/globus.svg'
import logo from '@/assets/icons/logo.svg'
import { Dialog } from "@/components/ui/dialog";
import AuthModal from "../auth-modal";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState('Uzbekcha')

  const changeLanguage = (e, lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(e.target.textContent)
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  return (
    <nav flex py="34px" items-center justify-between>
      <NavLink to='/'>
        <img width={106} height={34} src={logo} alt="LOGO" />
      </NavLink>
      <div flex items-center gap-6>
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
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <Button variant="secondary" onClick={handleOpenModal}>
            {t('login')}
          </Button>
          <AuthModal />
        </Dialog>
      </div>
    </nav>
  )
}

export default Header;
