import { ToggleGroupItem } from "@/components/ui/toggle-group";

const HeaderButton = ({ children, value, ariaLabel, icon, onClick }) => {
  return (
    <ToggleGroupItem
      value={value}
      aria-label={ariaLabel}
      flex items-center gap-2 bg="#DBF2F8" px-4 py-2 ml-4
      className="data-[state=on]:bg-primary data-[state=on]:text-white bg-[#e7f6fa]"
      onClick={onClick}
    >
      {icon} {children}
    </ToggleGroupItem>
  )
}

export default HeaderButton;
