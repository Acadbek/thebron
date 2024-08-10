import MenuCard from "./MenuCard";

const MenuTabComponent = () => {
  const menus = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
        {menus.map((menu) => (
          <MenuCard key={menu} />
        ))}
      </div>
    </div>
  );
};

export default MenuTabComponent;
