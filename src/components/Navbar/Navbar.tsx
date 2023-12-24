import styles from "./Navbar.module.css";

import USFlag from "../../assets/US.png";
import Profile from "../../assets/Profile.jpeg";

// React Icons
import { FiMenu } from "react-icons/fi";

const Navbar = ({sidebar, showSidebar}: {sidebar: boolean, showSidebar: (a: boolean) => void}) => {
  return (
    <nav className={styles.app__navbar}>
        <div className={styles.nav__center}>

            <div className={styles.sm__screen}>
                <button onClick={() => {showSidebar(!sidebar)}} type="button" title="Menu" aria-label="Menu">
                    <FiMenu aria-hidden />
                </button>
            </div>

            <div className={styles.nav__profile}>
                <img src={Profile} alt="Profile" />
                <div className={styles.profile__details}>
                    <h4>John Doe</h4>
                    <p>Lorem Ipsum</p>
                </div>
                <span className={styles.active} title="Active"></span>
            </div>

            <div className={styles.nav__language}>
                <p>English</p>
                <img src={USFlag} alt="US" />
            </div>

        </div>
    </nav>
  )
}

export default Navbar