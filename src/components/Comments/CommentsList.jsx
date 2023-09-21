import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

import { selectComments, selectSelectedItem } from "../../redux/selectors/dayry.selector";

import styles from "./Comments.module.css"

const CommentItem = ({ color, comment }) => {
    return <li className={styles.comment_item}>
        <div className={styles.square} style={{ backgroundColor: color }} />
        {comment}
    </li>
}

export const CommentsList = () => {
    const selectedItem = useSelector(selectSelectedItem);
    const comments = useSelector(selectComments(selectedItem))

    return <ul className={styles.comment_list}>
        {comments.map(({ id, color, comment }) => <CommentItem key={id} color={color} comment={comment} />)}
    </ul>
}

CommentItem.propTypes = {
    color: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
};