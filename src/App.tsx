import React from "react";

import styles from "./App.module.scss";

import Button from "./components/Button";
import {ButtonTypes} from "./components/Button/Button";

function App() {
    return (
        <div className={styles.App}>
            <Button
                title={"Main"}
                types={ButtonTypes.Main}
                onClick={() => {}}
            />
            <Button
                title={"Closing"}
                types={ButtonTypes.Closing}
                onClick={() => {}}
            />
            <Button
                title={"Arrow"}
                onClick={() => {}}
                types={ButtonTypes.Arrow}
            />
            <Button
                title={"Arrow"}
                onClick={() => {}}
                types={ButtonTypes.Like}
            />
        </div>
    );
}

export default App;