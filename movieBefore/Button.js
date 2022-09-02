// propTypes를 설치하기 위해 npm i prop-types를 콘솔창에 입력
import PropTypes from "prop-types"

function Button({ text }) {
    return <button>{text}</button>;
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;