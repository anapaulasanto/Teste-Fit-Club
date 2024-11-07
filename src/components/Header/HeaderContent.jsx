import styles from '../../styles/HeaderContent.module.scss';
import headerImage from '../../assets/images/header.png';

const HeaderContent = () => {
    return (
        <section className={styles.home}>
            <div className={styles.bg_home}>FITNESS</div>
            <div className={styles.text_home}>
                <div className={styles.span_home}>
                    <span>BEST FITNESS IN THE TOWN</span>
                </div>
                <div className={styles.h1_home}>
                    <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
                </div>
                <div className={styles.subtitle_home}>
                    <p>
                        Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you.
                        Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!
                    </p>
                </div>
                <div className={styles.button}> 
                    <button>Get Started</button>
                </div>
            </div>
            <div className={styles.img_home}>
                <img src={headerImage} alt="Imagem de um modelo com halteres." />
            </div>
        </section>
    )
}
export default HeaderContent;
