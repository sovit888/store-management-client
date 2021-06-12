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
  { label: "Dashboard", icons: <FaTachometerAlt /> },
  {
    label: "Users",
    icons: <FaUsers />,
    children: [
      {
        label: "All Users",
      },
      { label: "Manage Users" },
    ],
  },
  {
    label: "Groups",
    icons: <FaFileAlt />,
    children: [{ label: "All Groups" }, { label: "Manage Groups" }],
  },
  {
    label: "Brands",
    icons: <FaTags />,
  },
  { label: "Categorys", icons: <FaFileAlt /> },
  { label: "Stores", icons: <FaFileAlt /> },
  { label: "Attributes", icons: <FaFileAlt /> },
  {
    label: "Products",
    icons: <FaCubes />,
    children: [{ label: "All Products" }, { label: "Manage Products" }],
  },
  {
    label: "Orders",
    icons: <FaDollarSign />,
    children: [{ label: "All Orders" }, { label: "Manage Orders" }],
  },
  { label: "Reports", icons: <BsBarChartFill /> },
  { label: "Company", icons: <FaFileAlt /> },
  { label: "Profile", icons: <FaUser /> },
  { label: "Setting", icons: <FaWrench /> },
  { label: "Logout", icons: <FaSignOutAlt /> },
];
export default NavLists;
