import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-5 min-h-[56px] shadow bg-white fixed top-0 left-0 right-0 z-10">
      <FontAwesomeIcon
        icon={faBars}
        width={50}
        height={50}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Header;
