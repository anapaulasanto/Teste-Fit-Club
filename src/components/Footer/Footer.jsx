import styles from '../../styles/Footer.module.scss';
import logo from '../../assets/images/logo.png'
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className={styles.left_side}>
                <div className={styles.logo_footer}>
                    <img src={logo} alt="Logo da FitClub" />
                </div>
                <div className={styles.subtitle_logo}>
                    <p>Take the first step towards a healthier, stronger you with our unbeatable pricing plans. Let's sweat, achieve, and conquer together!</p>
                </div>
                <div className={styles.icons_footer}>
                    <a href="#"><FaFacebookF className={styles.icon} /></a>
                    <a href="#"><FaInstagram className={styles.icon} /></a>
                    <a href="#"><FaTwitter className={styles.icon} /></a>
                </div>
            </div>
            <div className={styles.right_side}>
                <div className={styles.company}>
                    <h1>Company</h1>
                    <a href="#">Business</a>
                    <a href="#">Franchise</a>
                    <a href="#">Partnership</a>
                    <a href="#">Network</a>
                </div>
                <div className={styles.about}>
                    <h1>About Us</h1>
                    <a href="#">Blogs</a>
                    <a href="#">Security</a>
                    <a href="#">Careers</a>
                </div>
                <div className={styles.contact}>
                    <h1>Contact</h1>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">BMI Calculator</a>
                </div>

            </div>
        </footer>


    )
}

export default Footer