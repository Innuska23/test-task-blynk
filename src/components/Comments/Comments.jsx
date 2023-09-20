import { DayryCard } from "../DayryCard";
import styles from "./Comments.module.css";

export const Comments = () => {
    const commentTitle = `Comments #`;
    return (
        <DayryCard title={commentTitle}>
            <div className={styles.comments}></div>
        </DayryCard>
    )
};