import { NavLink } from "react-router-dom";
import { ModeToggle } from "../toggle-theme";

const Header = () => {
  return (
    <nav border py-2>
      <ModeToggle />
      Header
      <div flex gap-4>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </nav>
  )
}

export default Header;
