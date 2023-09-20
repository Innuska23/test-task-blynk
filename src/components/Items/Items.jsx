import PropTypes from 'prop-types';
import { DayryCard } from '../DayryCard';

import styles from "./Items.module.css";

export const Items = ({ children }) => {
    return (
        <DayryCard title='Items'>
            <div className={styles.items}>{children}</div>
        </DayryCard>
    )

};

Items.propTypes = {
    children: PropTypes.element.isRequired
};