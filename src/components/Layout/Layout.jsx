import PropTypes from 'prop-types';

import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
    return <div className={styles.layout}>
        <div className={styles.title_container}>
            <h1 className={styles.title}>DAYRY APP</h1>
            <p className={styles.text_layout}>Comment whit no sense</p>
        </div>
        <div className={styles.layout_content}>{children}</div></div>

};

Layout.propTypes = {
    children: PropTypes.element.isRequired
};