// propTypes를 설치하기 위해 npm i prop-types를 콘솔창에 입력
import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({ text }) {
    return <button calssName={styles.btn}>{text}</button>;
}

// 특정 컴포넌트를 위한 css파일을 만들 수 있는 기능을 얻음.
Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;