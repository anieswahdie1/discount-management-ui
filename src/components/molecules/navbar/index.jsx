import { Button } from "antd";
import DrawerMenu from "../../atoms/drawer/drawer-menu";
import { useNavigate } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import useDrawer from "../../../stores/useDrawer";
import useAuth from "../../../stores/useAuth";
import authApi from "../../../apis/auth.api";
import FailedAlerts from "../../atoms/alerts/failed";
import SuccessAlert from "../../atoms/alerts/success";

const NavbarMenu = () => {
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState(false);

  const { setLogout } = useAuth((state) => state);
  const { setDrawerMenuFalse } = useDrawer((state) => state);
  const isMenuActive = useDrawer((state) => state.isMenuActive);

  const listMenu = useMemo(() => {
    const list = [
      {
        id: 1,
        name: "Voucher",
        path: "/voucher",
      },
    ];
    return list;
  }, []);

  const onClickLogout = useCallback(async () => {
    const { success, data } = await authApi.logout();

    if (success) {
      setDrawerMenuFalse();
      navigate("/");
      setLogout();
      SuccessAlert("Logout berhasil");
      return;
    }
    FailedAlerts(data);
  }, [navigate, setDrawerMenuFalse, setLogout]);

  const isMenuSelected = useMemo(() => {
    if (selectedMenu) {
      return true;
    }
    return isMenuActive;
  }, [isMenuActive, selectedMenu]);

  const onSelectMenu = useCallback(
    (el) => {
      setSelectedMenu(!selectedMenu);
      navigate(el?.path);
      setDrawerMenuFalse();
    },
    [navigate, selectedMenu, setDrawerMenuFalse]
  );

  return (
    <DrawerMenu title={"Menu"}>
      <div className="flex flex-col gap-5">
        {listMenu &&
          listMenu.map((el, idx) => {
            return (
              <div
                key={idx}
                className={"cursor-pointer text-xl hover:bg-blue-400 hover:text-white rounded-lg min-h-[47px] max-w-[100px] flex items-center justify-center".concat(
                  isMenuSelected ? " text-white bg-blue-400" : ""
                )}
                onClick={() => onSelectMenu(el)}
              >
                {el.name}
              </div>
            );
          })}
        <hr className="opacity-10" />
        <Button
          size="large"
          className="max-w-[100px]"
          danger
          onClick={onClickLogout}
        >
          Logout
        </Button>
      </div>
    </DrawerMenu>
  );
};

export default NavbarMenu;
