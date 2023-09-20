// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { DayryCard } from '../DayryCard';

import styles from "./Items.module.css";
import { ItemsForm } from './ItemsForm';

export const Items = () => {
    return (
        <DayryCard title='Items'>
            <div className={styles.items}>
                <ItemsForm />
            </div>
        </DayryCard>
    )
};
