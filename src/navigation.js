import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
// import { TbBuildingWarehouse } from 'react-icons/tb'
import { HiOutlineTruck } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

// import { FaRegHandshake } from 'react-icons/fa'
// import { CiBoxes } from 'react-icons/ci'
// import { CgNotes } from 'react-icons/cg'
// import {
//     MdCallReceived,
//     MdOutlineBorderColor,
//     MdPermMedia,
//     MdWeb,
// } from 'react-icons/md'
// import { GrCompliance, GrNotes } from 'react-icons/gr'
// import { IoCallOutline, IoDocumentTextOutline } from 'react-icons/io5'
// import { AiOutlineSetting } from 'react-icons/ai'
// import { BiBox, BiPurchaseTagAlt } from 'react-icons/bi'
// import { TfiLayoutMediaOverlayAlt2 } from 'react-icons/tfi'

export const navigation = [
  {
    label: "Dashboard",
    icon: RxDashboard,
    path: "/",
  },
  {
    label: "Category",
    icon: ImBooks,
    path: "/category",
  },

  {
    label: "Courses",
    icon: IoBookSharp,

    path: "/course",
  },

  {
    label: "Users",
    icon: FiUsers,
    path: "/users",
  },
  {
    label: "Orders",
    icon: HiOutlineTruck,
    path: "/order",
  },

  // {
  //     label: 'Inquiry',
  //     icon: MdCallReceived,
  //     path: '/inquiry',
  // },
  // {
  //     label: 'Batch',
  //     icon: MdOutlineBatchPrediction,
  //     path: '/batch',
  // },
  // {
  //     label: 'Orders',
  //     icon: MdOutlineBorderColor,
  //     path: '/orders',
  // },

  // {
  //     label: 'Batch',
  //     icon: MdOutlineBatchPrediction,
  //     path: '/batch',
  // },

  // {
  //     label: 'Media',
  //     icon: MdPermMedia,
  //     path: '/media/channel-group',
  // },
  // {
  //     label: 'Assets',
  //     icon: BiBox,
  //     path: '/assets/assets-management',
  // },
  // {
  //     label: 'All Website',
  //     icon: MdWeb,
  //     path: '/all-websites/website',
  // },
];
