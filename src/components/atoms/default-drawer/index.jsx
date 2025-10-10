import { Drawer } from "antd";

const DefaultDrawer = ({
  title,
  openDrawer,
  onCloseDrawer,
  placement,
  width,
  children,
}) => {
  return (
    <Drawer
      title={<span className="text-gray-500 opacity-70">{title}</span>}
      open={openDrawer}
      onClose={onCloseDrawer}
      placement={!placement ? "right" : placement}
      width={!width ? "100vw" : width}
    >
      {children}
    </Drawer>
  );
};

export default DefaultDrawer;
