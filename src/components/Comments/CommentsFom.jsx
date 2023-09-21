import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button";

import { dayrySliceActions } from "../../redux/reducers/dayry.slice";
import { selectSelectedItem } from "../../redux/selectors/dayry.selector";

import { getRandomColor } from "../../utils";

import { BUTTON_COLORS } from "../../constants";

import styles from "./Comments.module.css";


export const CommentsForm = () => {
    const dispatch = useDispatch();
    const selectedItem = useSelector(selectSelectedItem);
    const [color, setColor] = useState(getRandomColor());
    const [comment, setComment] = useState('');

    const handleColorChange = (e) => {
        setColor(e.currentTarget.value)
    }

    const handleCommentChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(dayrySliceActions.addComments({
            itemId: selectedItem,
            data: {
                color,
                comment
            }
        }));

        setColor(getRandomColor())
        setComment('')
    };

    return (
        <form className={styles.comments} onSubmit={handleSubmit}>
            <input className={styles.input} type='color' onChange={handleColorChange} value={color} />

            <textarea
                className={styles.textarea}
                onChange={handleCommentChange}
                value={comment}
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Type comment here..."
                required />

            <Button color={BUTTON_COLORS.SECONDARY} type="submit">Add New</Button>
        </form>
    )
};
