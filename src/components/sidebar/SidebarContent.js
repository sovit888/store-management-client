import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaTags,
  FaCubes,
  FaDollarSign,
  FaWrench,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";

const NavLists = [
  {
    label: "Dashboard",
    icons: <FaTachometerAlt />,
    link: "/",
    permissions: false,
  },
  {
    label: "Users",
    icons: <FaUsers />,
    permissions: true,
    permission_type: "users",
    children: [
      {
        label: "All Users",
        link: "/user/all",
      },
      { label: "Manage Users", link: "/user/manage" },
    ],
  },
  {
    label: "Groups",
    icons: <FaFileAlt />,
    permissions: true,
    permission_type: "groups",
    children: [
      { label: "All Groups", link: "/group/all" },
      { label: "Manage Groups", link: "/group/manage" },
    ],
  },
  {
    label: "Brands",
    icons: <FaTags />,
    link: "/brand",
    permissions: true,
    permission_type: "brands",
  },
  {
    label: "Categorys",
    icons: <FaFileAlt />,
    link: "/category",
    permissions: true,
    permission_type: "categorys",
  },
  {
    label: "Stores",
    icons: <FaFileAlt />,
    link: "/store",
    permissions: true,
    permission_type: "stores",
  },
  {
    label: "Attributes",
    icons: <FaFileAlt />,
    link: "/attribute",
    permissions: true,
    permission_type: "attributes",
  },
  {
    label: "Products",
    icons: <FaCubes />,
    permissions: true,
    permission_type: "products",
    children: [
      { label: "All Products", link: "/product/all" },
      { label: "Manage Products", link: "/product/manage" },
    ],
  },
  {
    label: "Orders",
    icons: <FaDollarSign />,
    permissions: true,
    permission_type: "orders",
    children: [
      { label: "Add Order", link: "/order/add" },
      { label: "Manage Orders", link: "/order/manage" },
    ],
  },
  {
    label: "Reports",
    icons: <BsBarChartFill />,
    link: "/report",
    permissions: false,
  },
  {
    label: "Company",
    icons: <FaFileAlt />,
    link: "/company",
    permissions: false,
  },
  { label: "Profile", icons: <FaUser />, link: "/profile", permissions: false },
  {
    label: "Setting",
    icons: <FaWrench />,
    link: "/setting",
    permissions: false,
  },
  {
    label: "Logout",
    icons: <FaSignOutAlt />,
    link: "/logout",
    permissions: false,
  },
];
export default NavLists;
