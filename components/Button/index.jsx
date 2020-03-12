import * as S from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ text, click }) => <S.Button onClick={click}>{text}</S.Button>;

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: "Click here",
}

export default Button;