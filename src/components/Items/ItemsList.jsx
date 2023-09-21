import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button";

import { dayrySliceActions } from "../../redux/reducers/dayry.slice";
import { selectCommentsCount, selectItems, selectSelectedItem } from "../../redux/selectors/dayry.selector";

import { BUTTON_COLORS } from "../../constants";

import styles from "./Items.module.css";

const Item = ({ title, id, onSelect, onDelete, isSelected }) => {
    const count = useSelector(selectCommentsCount(id))

    const handleSelectClick = () => onSelect(id);

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(id);
    }

    return (
        <li
            className={`${styles.item} ${isSelected ? styles.active : ''}`}
            onClick={handleSelectClick}
        >
            {title}
            <span className={styles.badge}>{count}</span>
            <Button
                color={BUTTON_COLORS.DANGER}
                onClick={handleDeleteClick}
            >
                Delete
            </Button>
        </li>
    )
};

export const ItemsList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const selectedItem = useSelector(selectSelectedItem)

    const handleSelectItem = (id) => {
        dispatch(dayrySliceActions.selectedItem(id))
    }

    const handleDelete = (id) => {
        dispatch(dayrySliceActions.removesItems(id))
    }

    return (
        <ul className={styles.item_list}>
            {items.map(({ id, title }) => <Item
                key={id}
                id={id}
                title={title}
                isSelected={selectedItem === id}
                onDelete={handleDelete}
                onSelect={handleSelectItem}
            />)}
        </ul>
    )
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
};