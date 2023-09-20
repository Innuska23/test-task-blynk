// import { useDispatch } from "react-redux";
import { BUTTON_COLORS } from "../../constants";
import { Button } from "../Button";
import styles from "./Items.module.css";


// const onAddItems = id => {
//     useDispatch(addItems(id));
// };

export const ItemsForm = () => {
    return (
        <form className={styles.form}>
            <input className={styles.input}
                type="text"
                name="name"
                placeholder="Type name here..."
                pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            />
            <Button color={BUTTON_COLORS.PRIMARY}>Add New</Button>
        </form>
    )
};
