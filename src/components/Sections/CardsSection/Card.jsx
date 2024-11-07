import styles from '../../../styles/CardSection.module.scss';
import { FaArrowRight } from "react-icons/fa";

const Card = ({ icon: Icon, title, subtitle, subtitleLink }) => {
    return (
        <div className={styles.card}>
            <Icon className={styles.card_icon} />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className={styles.link_card}>
                <p>{subtitleLink}</p>
                <FaArrowRight className={styles.arrow_card} />
            </div>
        </div>
    );
}

export default Card;