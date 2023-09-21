import { DayryCard } from '../DayryCard';

import { ItemsForm } from './ItemsForm';
import { ItemsList } from './ItemsList';

import styles from "./Items.module.css";

export const Items = () => {
    return (
        <DayryCard title='Items'>
            <div className={styles.items}>
                <ItemsForm />
                <ItemsList />
            </div>
        </DayryCard>
    )
};
