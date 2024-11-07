import styles from '../../../styles/JoinUsSection.module.scss';
import join from './../../../assets/images/join.jpg';
import CardBar from './CardBar';
import { BsPersonFillGear } from "react-icons/bs";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { MdDomainAdd } from "react-icons/md";

const JoinUsSection = () => {
    return(
        <section className={styles.join_us_section}>
            <div className={styles.title_join_us}>
                <h1>WHY JOIN US?</h1>
            </div>
            <div className={styles.subtitle_join_us}>
                <p>Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends
                    and stay motivated</p>
            </div>
            <div className={styles.img_join_us}>
                <img src={join} alt="Pessoas treinando em spinnings" />
                <div className={styles.infos_bar}>
                    <CardBar 
                        Icon={BsPersonFillGear}
                        title="Personal Trainer"
                        subtitle="Unlock your patential with our expert Personal Trainers."
                    />
                    <CardBar
                        Icon={HiMiniVideoCamera}
                        title="Praticte Sessions"
                        subtitle="Elevate your fitness with praticte sessions."
                    />
                    <CardBar
                        Icon={MdDomainAdd}
                        title="Good Management"
                        subtitle="Supportive management, for your fitness sucess."
                    />
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;