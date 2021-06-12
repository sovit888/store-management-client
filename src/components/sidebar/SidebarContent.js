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
  { label: "Dashboard", icons: <FaTachometerAlt />, link: "/" },
  {
    label: "Users",
    icons: <FaUsers />,
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
    children: [
      { label: "All Groups", link: "/group/all" },
      { label: "Manage Groups", link: "/group/manage" },
    ],
  },
  {
    label: "Brands",
    icons: <FaTags />,
    link: "/brand",
  },
  { label: "Categorys", icons: <FaFileAlt />, link: "/category" },
  { label: "Stores", icons: <FaFileAlt />, link: "/store" },
  { label: "Attributes", icons: <FaFileAlt />, link: "/attribute" },
  {
    label: "Products",
    icons: <FaCubes />,
    children: [
      { label: "All Products", link: "/product/all" },
      { label: "Manage Products", link: "/product/manage" },
    ],
  },
  {
    label: "Orders",
    icons: <FaDollarSign />,
    children: [
      { label: "All Orders", link: "/order/all" },
      { label: "Manage Orders", link: "/order/manage" },
    ],
  },
  { label: "Reports", icons: <BsBarChartFill />, link: "/report" },
  { label: "Company", icons: <FaFileAlt />, link: "/company" },
  { label: "Profile", icons: <FaUser />, link: "/profile" },
  { label: "Setting", icons: <FaWrench />, link: "/setting" },
  { label: "Logout", icons: <FaSignOutAlt />, link: "/" },
];
export default NavLists;
