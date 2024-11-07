import styles from '../../../styles/JoinUsSection.module.scss';

const CardBar = ({ title, subtitle, Icon }) => {
    return (
        <div className={styles.card_bar}>
            <div className={styles.icon_info_bar}>
               <Icon className={styles.card_icon} />
            </div>
            <div className={styles.text_info_bar}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>

    );
};

export default CardBar;