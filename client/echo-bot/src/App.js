import './styles/style.css';
import Header from "./components/Header";
import React, {useState} from "react";
import ChatbotForm from "./components/ChatbotForm";
import ChatBotMessageContainer from "./components/ChatBotMessageContainer";

function App() {
    const [text, setText] = useState('');
    const [messages, setMessage] = useState([]);

    return (
        <div className="wrapper">
            <div className="main-content">
                <Header title="Echo Bot"/>
                <ChatBotMessageContainer messages={messages}/>
                <ChatbotForm messages={messages} setMessage={setMessage} text={text} setText={setText}/>
            </div>
        </div>
    );
}

export default App;
