import PropTypes from 'prop-types';

import styles from "./DayryCard.module.css";

export const DayryCard = ({ title, children }) => {
    return <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        {children}
    </div>
};

DayryCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};