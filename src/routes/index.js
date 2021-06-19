import Attribute from "../pages/attributes/Attribute";
import Brand from "../pages/brands/Brand";
import Category from "../pages/category/Category";
import Company from "../pages/company/Company";
import Dashboard from "../pages/dashboard/Dashboard";
import AllGroup from "../pages/groups/allgroup/AllGroup";
import NewGroup from "../pages/groups/allgroup/NewGroup";
import ManageGroup from "../pages/groups/managegroup/ManageGroup";
import UpdateGroup from "../pages/groups/managegroup/UpdateGroup";
import AllOrder from "../pages/orders/AllOrder";
import ManageOrder from "../pages/orders/ManageOrder";
import AllProduct from "../pages/products/AllProduct";
import ManageProduct from "../pages/products/ManageProduct";
import Profile from "../pages/profiles/Profile";
import Report from "../pages/reports/Report";
import Store from "../pages/stores/Store";
import AllUser from "../pages/user/alluser/AllUser";
import NewUser from "../pages/user/alluser/NewUser";
import ManageUser from "../pages/user/manageuser/ManageUser";
import Setting from "../pages/Setting/Setting";

export const privateRoutes = [
  { path: "/", component: Dashboard },
  { path: "/attribute", component: Attribute },
  { path: "/brand", component: Brand },
  { path: "/category", component: Category },
  { path: "/company", component: Company },
  { path: "/group/all", component: AllGroup },
  { path: "/group/manage", component: ManageGroup },
  { path: "/group/new", component: NewGroup },
  { path: "/group/:id", component: UpdateGroup },
  { path: "/order/all", component: AllOrder },
  { path: "/order/manage", component: ManageOrder },
  { path: "/product/all", component: AllProduct },
  { path: "/product/manage", component: ManageProduct },
  { path: "/profile", component: Profile },
  { path: "/report", component: Report },
  { path: "/store", component: Store },
  { path: "/user/all", component: AllUser },
  { path: "/user/manage", component: ManageUser },
  { path: "/user/new", component: NewUser },
  { path: "/setting", component: Setting },
];
