import React from "react";

import Button from "./components/Button";
import { ButtonTypes } from "./components/Button/Button";
import Input from "./components/Input";

function App() {
    return (
        <div>
            {/*<Button*/}
            {/*    title={"Main"}*/}
            {/*    types={ButtonTypes.Main}*/}
            {/*    onClick={() => {}}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title={"Closing"}*/}
            {/*    types={ButtonTypes.Closing}*/}
            {/*    onClick={() => {}}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title={"Arrow"}*/}
            {/*    onClick={() => {}}*/}
            {/*    types={ButtonTypes.Arrow}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title={"Like"}*/}
            {/*    onClick={() => {}}*/}
            {/*    types={ButtonTypes.Like}*/}
            {/*/>*/}
            <Input inputType={"text"} title={"Text"} onChange={()=>{}} placeholder={"Your text"} />
        </div>
    );
}

export default App;