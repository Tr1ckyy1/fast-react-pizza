import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route
        path="menu"
        element={<Menu />}
        loader={menuLoader}
        errorElement={<Error />}
      />
      <Route path="cart" element={<Cart />} />
      <Route
        path="order/new"
        element={<CreateOrder />}
        action={createOrderAction}
      />
      <Route
        path="order/:orderId"
        element={<Order />}
        loader={orderLoader}
        errorElement={<Error />}
        action={updateOrderAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
