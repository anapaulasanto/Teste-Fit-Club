import styles from '../../../styles/CardSection.module.scss';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaWeight, FaRunning, FaShoppingBasket } from "react-icons/fa";
import { FaHeartPulse } from 'react-icons/fa6';
import Card from './Card';

const CardSection = () => {
    return (
        <section>
            <section className={styles.cards_section}>
                <div className={styles.title_section_card}>
                    <div className={styles.text_side}>
                        <p>EXPLORE OUR PROGRAM</p>
                    </div>
                    <div className={styles.arrow_side}>
                        <button className={styles.btn_arrow}>
                            <FaRegArrowAltCircleLeft className={styles.arrow_title} />
                        </button>
                        <button className={styles.btn_arrow}>
                            <FaRegArrowAltCircleRight className={styles.arrow_title} />
                        </button>
                    </div>
                </div>
                <div className={styles.cards}>
                    <Card
                        icon={FaWeight}
                        title="Strength"
                        subtitle="Embrace the essence of strength as we delve into its various dimensions: physical, mental, and emotional."
                        subtitleLink="Join Now"
                    />
                    <Card
                        icon={FaHeartPulse}
                        title="Physical Fitness"
                        subtitle="It encompasses a range of activities that improve health, strength, flexibility, and overall well-being."
                        subtitleLink="Join Now"
                    />
                    <Card
                        icon={FaRunning}
                        title="Fat Lose"
                        subtitle="Through a combination of workout routines and expert guidance, we’ll empower you to reach your goals."
                        subtitleLink="Join Now"
                    />
                    <Card
                        icon={FaShoppingBasket}
                        title="Weight Gain"
                        subtitle="Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner."
                        subtitleLink="Join Now"
                    />
                </div>
            </section>
        </section>
    );
};

export default CardSection;
