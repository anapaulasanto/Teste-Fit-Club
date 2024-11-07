import styles from '../../../styles/PlansSection.module.scss';
import { CiCircleCheck } from "react-icons/ci";

const CardPlans = ({ title, subtitle, descriptions }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title_card}>
                <h1>{title}</h1>
            </div>
            <div className={styles.subtitle_card}>
                <h3>{subtitle}</h3>
            </div>
            <div className={styles.descriptions_card}>
                {descriptions.map((description, index) => (
                    <div key={index} className={styles.description}>
                        <CiCircleCheck className={styles.icon_description} />
                        <p>{description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.btn_card}>
                <button className={styles.btn_cardPlans}>Join Now</button>
            </div>
        </div>
    );
};

export default CardPlans;