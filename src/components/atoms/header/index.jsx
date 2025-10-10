import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import useDrawer from "../../../stores/useDrawer";
import NavbarMenu from "../../molecules/navbar";

const Header = () => {
  const { setDrawerMenuOpen } = useDrawer((state) => state);

  const onClickMenuIcon = useCallback(() => {
    setDrawerMenuOpen();
  }, [setDrawerMenuOpen]);

  return (
    <>
      <div className="flex flex-row justify-between items-center px-5 min-h-[56px] shadow bg-white fixed top-0 left-0 right-0 z-10">
        <FontAwesomeIcon
          icon={faBars}
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={onClickMenuIcon}
        />
      </div>
      <NavbarMenu />
    </>
  );
};

export default Header;
