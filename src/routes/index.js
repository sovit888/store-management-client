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
import EditProduct from "../pages/products/manageproducts/EditProduct";
import Profile from "../pages/profiles/Profile";
import Report from "../pages/reports/Report";
import Store from "../pages/stores/Store";
import AllUser from "../pages/user/alluser/AllUser";
import NewUser from "../pages/user/alluser/NewUser";
import ManageUser from "../pages/user/manageuser/ManageUser";
import Setting from "../pages/Setting/Setting";
import UpdatePassword from "../pages/Setting/UpdatePassword";
import Login from "../pages/auth/login/Login";
import Logout from "../pages/auth/logout/Logout";

export const privateRoutes = [
  { path: "/", component: Dashboard, permissions: false },
  {
    path: "/attribute",
    component: Attribute,
    permission_type: "attributes",
    permissions: true,
  },
  {
    path: "/attribute/:id",
    component: AttributeValue,
    permission_type: "attributes",
    permissions: true,
  },
  {
    path: "/brand",
    component: Brand,
    permission_type: "brands",
    permissions: true,
  },
  {
    path: "/category",
    component: Category,
    permission_type: "categorys",
    permissions: true,
  },
  { path: "/company", component: Company, permissions: false },
  {
    path: "/group/all",
    component: AllGroup,
    permission_type: "groups",
    permissions: true,
  },
  {
    path: "/group/manage",
    component: ManageGroup,
    permission_type: "groups",
    permissions: true,
  },
  {
    path: "/group/new",
    component: NewGroup,
    permission_type: "groups",
    permissions: true,
  },
  {
    path: "/group/:id",
    component: UpdateGroup,
    permission_type: "groups",
    permissions: true,
  },
  {
    path: "/order/add",
    component: AddOrder,
    permission_type: "orders",
    permissions: true,
  },
  {
    path: "/order/manage",
    component: ManageOrder,
    permission_type: "orders",
    permissions: true,
  },
  {
    path: "/order/:id",
    component: PrintOrder,
    permission_type: "orders",
    permissions: true,
  },
  {
    path: "/product/all",
    component: AllProduct,
    permission_type: "products",
    permissions: true,
  },
  {
    path: "/product/new",
    component: NewProduct,
    permission_type: "products",
    permissions: true,
  },
  {
    path: "/product/manage",
    component: ManageProduct,
    permission_type: "products",
    permissions: true,
  },
  {
    path: "/product/:id",
    component: EditProduct,
    permission_type: "products",
    permissions: true,
  },
  { path: "/profile", component: Profile },
  { path: "/report", component: Report },
  {
    path: "/store",
    component: Store,
    permission_type: "stores",
    permissions: true,
  },
  {
    path: "/user/all",
    component: AllUser,
    permission_type: "users",
    permissions: true,
  },
  {
    path: "/user/manage",
    component: ManageUser,
    permission_type: "users",
    permissions: true,
  },
  {
    path: "/user/new",
    component: NewUser,
    permission_type: "users",
    permissions: true,
  },
  { path: "/setting", component: Setting },
  { path: "/setting/password", component: UpdatePassword },
  { path: "/logout", component: Logout },
];

export const guestRoutes = [{ path: "/login", component: Login }];
