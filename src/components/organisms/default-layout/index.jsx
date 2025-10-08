import Header from "../../atoms/header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary-gray pt-[80px] pb-[60px]">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
