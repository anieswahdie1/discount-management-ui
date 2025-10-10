import { Drawer } from "antd";
import useDrawer from "../../../stores/useDrawer";

const DrawerMenu = ({ title, placement, children }) => {
  const isDrawerMenuOpen = useDrawer((state) => state.isDrawerMenuOpen);
  const { setDrawerMenuFalse } = useDrawer((state) => state);

  return (
    <Drawer
      title={<span className="text-gray-500 opacity-70">{title}</span>}
      placement={!placement ? "left" : placement}
      width="100vw"
      onClose={setDrawerMenuFalse}
      open={isDrawerMenuOpen}
    >
      {children}
    </Drawer>
  );
};

export default DrawerMenu;
