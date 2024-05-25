import { NavLink } from "react-router-dom";
import { ModeToggle } from "../toggle-theme";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
      <div flex gap-4>
        <button onClick={() => changeLanguage('uz')}>Uzb</button>
        <button onClick={() => changeLanguage('ru')}>Rus</button>
      </div>
    </nav>
  )
}

export default Header;
