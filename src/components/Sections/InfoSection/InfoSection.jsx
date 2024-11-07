import styles from '../../../styles/InfoSection.module.scss';
import img1 from '../../../assets/images/class-1.jpg';
import img2 from '../../../assets/images/class-2.jpg';

const InfoSection = () => {
    return (
        <section className={styles.information_section}>
            <div className={styles.img_info_section}>
                <img className={styles.img_info1} src={img1} alt="Modelo treinando com corda" />
                <img className={styles.img_info2} src={img2} alt="Modelo treinando" />
            </div>
            <div className={styles.text_info_section}>
                <div className={styles.h1_info_section}>
                    <h1>THE CLASS YOU WILL GET HERE</h1>
                </div>
                <div className={styles.p_info_section}>
                    <p>Led by our team of expert and motivational instructors, "The Class You Will Get Here" is a
                        high-energy, results-driven
                        session that combines a perfect blend of cardio, strength training, and functional exercises.
                        Each class is carefully
                        curated to keep you engaged and challenged, ensuring you never hit a plateau in your fitness
                        endeavors.</p>
                </div>
                <div className={styles.button}>
                    <button>Book A Class</button>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
