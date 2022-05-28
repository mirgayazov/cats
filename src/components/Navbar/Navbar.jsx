import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <nav>
                <NavLink
                    className={(navData) => navData.isActive ? styles.activeLink : ""}
                    to={'/react-gh-pages/'}>
                    Все котики
                </NavLink>
                <NavLink
                    className={(navData) => navData.isActive ? styles.activeLink : ""}
                    to={'/react-gh-pages/favorites'}>
                    Любимые котики
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
