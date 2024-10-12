import { MdDashboard } from "react-icons/md";
import { FaUserPlus, FaCalendarDay } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { MdSettings } from "react-icons/md";

export const links = [
  {
    title: 'Main Menu',
    links: [
      {
        name: 'Dashboard',
        icon: <MdDashboard />,
        href: '/'
      },
      {
        name: 'Create Portfolio',
        icon: <FaUserPlus />,
        href: '/create'
      },
      {
        name: 'Property List',
        icon: <FaCalendarDay />,
        href: '/property'
      },
    ],
  },

  {
    title: 'Other',
    links: [
      {
        name: 'Support',
        icon: <BiSupport />,
        href: '/support'
      },
      {
        name: 'Setting',
        icon: <MdSettings />,
        href: '/setting'
      },
    ],
  },
];