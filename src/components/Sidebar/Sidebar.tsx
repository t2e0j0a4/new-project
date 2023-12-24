import { SidebarMenuTypes } from "../../types";
import styles from "./Sidebar.module.css";

// React Icons
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { RiPassValidLine } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoIosCloudDownload, IoIosLogOut, IoMdPricetag } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu: SidebarMenuTypes[] = [
    {
        id:1,
        title: 'Invoices',
        path: '/dashboard',
        icon: LiaFileInvoiceSolid,
        iconColor: '#20e8e5'
    },{
        id:2,
        title: 'Customers',
        path: '/dashboard',
        icon: FaUser,
        iconColor: '#1cf6bc'
    },{
        id:3,
        title: 'My Business',
        path: '/dashboard',
        icon: IoSettingsOutline,
        iconColor: '#15deec'
    },{
        id:4,
        title: 'Invoice Journal',
        path: '/dashboard',
        icon: FaBook,
        iconColor: '#16dbf5'
    },{
        id:5,
        title: 'Price List',
        path: '/dashboard',
        icon: IoMdPricetag,
        iconColor: '#f1a129'
    },{
        id:6,
        title: 'Multiple Invoicing',
        path: '/dashboard',
        icon: LiaFileInvoiceSolid,
        iconColor: '#2bd8e1'
    },{
        id:7,
        title: 'Unpaid Invoices',
        path: '/dashboard',
        icon: MdCancel,
        iconColor: '#d42f7c'
    },{
        id:8,
        title: 'Offer',
        path: '/dashboard',
        icon: BiSolidOffer,
        iconColor: '#e8c64a'
    },{
        id:9,
        title: 'Inventory Control',
        path: '/dashboard',
        icon: MdOutlineInventory,
        iconColor: '#48edf3'
    },{
        id:10,
        title: 'Member Invoicing',
        path: '/dashboard',
        icon: RiPassValidLine,
        iconColor: '#0b70af'
    },{
        id:11,
        title: 'Imports/Exports',
        path: '/dashboard',
        icon: IoIosCloudDownload,
        iconColor: '#2466bd'
    },{
        id:12,
        title: 'Logout',
        path: '/dashboard',
        icon: IoIosLogOut,
        iconColor: '#32e1a4'
    },
]

const Sidebar = ({showSidebar}: {showSidebar: boolean, setShowSidebar: (a: boolean) => void}) => {
  return (
    <aside className={`${showSidebar && styles.sidebar__active} ${styles.app__sidebar}`}>
        <nav className={styles.sidebar__main}>
            <div className={styles.sidebar__head}>
                <h2>Menu</h2>
            </div>
            <div className={styles.sidebar__menu}>
                {
                    Menu.map((route) => <Link to={route.path} key={route.id}>
                        <route.icon fontSize={20} color={route.iconColor} />
                        <span>{route.title}</span>
                    </Link>)
                }
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar