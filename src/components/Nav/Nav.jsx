import { useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import styles from '../../styles/Nav.module.scss';
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
    useEffect(() => {
        const bar = document.getElementById('bar');
        const menu = document.getElementById('menu');

        const toggleMenu = () => {
            menu.classList.toggle(styles.abrir_menu);
        };

        bar.addEventListener('click', toggleMenu);

        return () => {
            bar.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <nav className={styles.nav}>
            <div className={styles.logo_nav}>
                <img src={logo} alt="Logo FitClub" />
            </div>
            <div className={styles.menu_bar}>
                <CiMenuBurger id="bar" />
            </div>
            <div className={styles.menu} id="menu">
                <ul className={styles.menu_nav}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Program</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
                <div className={styles.button}>
                    <button>Join Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
