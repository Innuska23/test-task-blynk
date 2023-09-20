import PropTypes from 'prop-types';

import { BUTTON_COLORS } from '../../constants';

import styles from "./Button.module.css";

export const Button = ({ children, color, ...props }) => {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>{children}</button>
    )
};

Button.propTypes = {
    children: PropTypes.element.isRequired,
    color: PropTypes.oneOf(Object.values(BUTTON_COLORS))
};