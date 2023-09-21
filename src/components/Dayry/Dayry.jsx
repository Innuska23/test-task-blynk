import { Comments } from "../Comments";
import { Items } from "../Items";
import { Layout } from "../Layout";

import styles from "./Dayry.module.css";

export const Dayry = () => {
    return (
        <Layout>
            <div className={styles.dayry}>
                <Items />
                <Comments />
            </div>
        </Layout>
    )
};