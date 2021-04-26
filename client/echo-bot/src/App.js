import './styles/style.css';
import MessageInputField from "./components/MessageInputField";
import Header from "./components/Header";
import React from "react";

function App() {
    return (
        <>
            <Header title="Echo Bot"/>
            <MessageInputField/>
        </>
    );
}

export default App;
