import { useSelector } from "react-redux";

import { DayryCard } from "../DayryCard";
import { CommentsForm } from "./CommentsFom";
import { CommentsList } from "./CommentsList";

import { selectSelectedItem } from "../../redux/selectors/dayry.selector";

import styles from './Comments.module.css'

export const Comments = () => {
    const selectedItem = useSelector(selectSelectedItem);
    const commentTitle = `Comments #${selectedItem}`;

    return (
        <DayryCard title={commentTitle}>
            <>
                <CommentsList />

                {selectedItem ? <CommentsForm /> : <p className={styles.info}>Select item for add comment</p>}
            </>
        </DayryCard>
    )
};