import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import { IoIosSettings } from "react-icons/io";
import { FaUser, FaWallet } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { RiBillFill } from "react-icons/ri";



export const menuItems = [
  {
    name: 'Profile',
    href: '/',
    icon: <FaUser />,
  },
  
  {
    name: 'Billings',
    href: "#",
    icon: <RiBillFill />,
  },
  {
    name: 'Invoices',
    href: "#",
    icon: <FaWallet />,
  },
];

export const lowerMenuItems = [
  {
    name: 'Settings',
    href: "#",
    icon: <IoIosSettings />,
  },
  
  {
    name: 'Help',
    href: "#",
    icon: <BiSolidPhoneCall />,
  },
  {
    name: 'Log out',
    href: "#",
    icon: <IoLogOut />,
  },
];