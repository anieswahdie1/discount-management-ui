import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import Voucher from "../pages/voucher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/voucher",
    element: <Voucher />,
  },
]);

export default router;
