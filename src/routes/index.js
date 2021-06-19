import Attribute from "../pages/attributes/attributes/Attribute";
import AttributeValue from "../pages/attributes/values/AttributeValue";
import Brand from "../pages/brands/Brand";
import Category from "../pages/category/Category";
import Company from "../pages/company/Company";
import Dashboard from "../pages/dashboard/Dashboard";
import AllGroup from "../pages/groups/allgroup/AllGroup";
import NewGroup from "../pages/groups/allgroup/NewGroup";
import ManageGroup from "../pages/groups/managegroup/ManageGroup";
import UpdateGroup from "../pages/groups/managegroup/UpdateGroup";
import AddOrder from "../pages/orders/addorder/AddOrder";
import ManageOrder from "../pages/orders/manageorder/ManageOrder";
import PrintOrder from "../pages/orders/manageorder/PrintOrder";
import AllProduct from "../pages/products/allproducts/AllProduct";
import NewProduct from "../pages/products/allproducts/NewProduct";
import ManageProduct from "../pages/products/manageproducts/ManageProduct";
import Profile from "../pages/profiles/Profile";
import Report from "../pages/reports/Report";
import Store from "../pages/stores/Store";
import AllUser from "../pages/user/alluser/AllUser";
import NewUser from "../pages/user/alluser/NewUser";
import ManageUser from "../pages/user/manageuser/ManageUser";
import Setting from "../pages/Setting/Setting";
import Login from "../pages/auth/login/Login";

export const privateRoutes = [
  { path: "/", component: Dashboard },
  { path: "/attribute", component: Attribute, permissions: "attributes" },
  {
    path: "/attribute/:id",
    component: AttributeValue,
    permissions: "attributes",
  },
  { path: "/brand", component: Brand, permissions: "attributes" },
  { path: "/category", component: Category, permissions: "attributes" },
  { path: "/company", component: Company },
  { path: "/group/all", component: AllGroup, permissions: "attributes" },
  { path: "/group/manage", component: ManageGroup, permissions: "attributes" },
  { path: "/group/new", component: NewGroup, permissions: "attributes" },
  { path: "/group/:id", component: UpdateGroup, permissions: "attributes" },
  { path: "/order/add", component: AddOrder, permissions: "attributes" },
  { path: "/order/manage", component: ManageOrder, permissions: "attributes" },
  { path: "/order/:id", component: PrintOrder, permissions: "attributes" },
  { path: "/product/all", component: AllProduct, permissions: "attributes" },
  { path: "/product/new", component: NewProduct, permissions: "attributes" },
  {
    path: "/product/manage",
    component: ManageProduct,
    permissions: "attributes",
  },
  { path: "/profile", component: Profile },
  { path: "/report", component: Report },
  { path: "/store", component: Store, permissions: "attributes" },
  { path: "/user/all", component: AllUser, permissions: "attributes" },
  { path: "/user/manage", component: ManageUser, permissions: "attributes" },
  { path: "/user/new", component: NewUser, permissions: "attributes" },
  { path: "/setting", component: Setting },
];

export const guestRoutes = [{ path: "/login", component: Login }];
