import { Button } from "@/components/ui/button";
import { Pilot } from "@/assets/icons";
const HeaderButton = ({ children, icon }) => {
  return (
    <Button flex items-center hover="bg-[#7bd0e5]" gap-2 bg="#DBF2F8" variant="secondary" px-4 py-2 ml-4>
      <Pilot />
      {children}
    </Button>
  )
}

export default HeaderButton;
