import { Button } from "@/components/ui/button";

const HeaderButton = ({ children, icon }) => {
  return (
    <Button flex items-center hover="bg-[#7bd0e5]" gap-2 bg="#DBF2F8" variant="secondary" px-4 py-2 ml-4>
      <img src={icon} alt="Icon" />
      {children}
    </Button>
  )
}

export default HeaderButton;
