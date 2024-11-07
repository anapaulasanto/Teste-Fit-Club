import styles from '../styles/BtnBack.module.scss';
import { FaArrowCircleUp } from "react-icons/fa";

const back = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const showHideButton = () => {
    const btnBack = document.getElementById("btnBack");
    if (window.scrollY > 200) {
        btnBack.style.display = 'block';
    } else {
        btnBack.style.display = 'none';
    }
};

window.addEventListener('scroll', showHideButton);


const ButtonBack = () => {
    return (
        <div>
            <button
                className={styles.btn_back}
                id='btnBack'
                onClick={back}
            >
                <FaArrowCircleUp />
            </button>
        </div>
    )
}

export default ButtonBack;