import styles from '../../../styles/ComentsSection.module.scss'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import user from '../../../assets/images/member.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ComentsSection = () => {
    return (
        <>
            <div className={styles.coments_section}>
                <div className={styles.coments}>
                    <div className={styles.title} >
                        <h1>MEMBER REVIEW</h1>
                    </div>
                    <div className={styles.subtitle}>
                        <div className={styles.aspas}>
                            <span>"</span>
                        </div>
                        <div className={styles.span_subtitle}>
                            <h4>What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.</h4>
                            
                        </div>              
                    </div>
                    <div className={styles.icons}>
                        <FaStar className={styles.icon} />
                        <FaStar className={styles.icon} />
                        <FaStar className={styles.icon} />
                        <FaStar className={styles.icon} />
                        <FaRegStarHalfStroke className={styles.icon} />
                    </div>
                    <div className={styles.users}>
                        <div className={styles.user}>
                            <img src={user} alt="Foto de um membro" />
                            <div className={styles.text_side}>
                                <h1>Jane Cooper</h1>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className={styles.arrow_side}>
                            <FaArrowLeft />
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComentsSection;