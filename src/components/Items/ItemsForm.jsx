import { useState } from "react";
import { useDispatch } from "react-redux";

import { dayrySliceActions } from "../../redux/reducers/dayry.slice";
import { Button } from "../Button";

import { BUTTON_COLORS } from "../../constants";

import styles from "./Items.module.css";

export const ItemsForm = () => {
    const dispatch = useDispatch()

    const [itemName, setItemName] = useState('');

    const handleChange = (e) => {
        setItemName(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(dayrySliceActions.addItems(itemName))
        setItemName('')
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input}
                value={itemName}
                onChange={handleChange}
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Type name here..."
                required
            />
            <Button color={BUTTON_COLORS.PRIMARY} type="submit">Add New</Button>
        </form>
    )
};
