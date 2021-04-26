import React, {useRef, useState} from 'react';
import axios from "axios";
import config from "../config";
import BotResponse from "./BotResponse";
import MyMessage from "./MyMessage";

export default function MessageInputField(props) {
    const messageInput = useRef();
    const[text, setText] = useState('');
    const [messages, setMessage] = useState([]);
    const messageBubbles = [];

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            submit(e);
            setText('');
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const submit = function (event) {
        event.preventDefault();
        setMessage(previousState => [...previousState, {
            key: messages.length,
            user: "user",
            messageText: text
        }]);
        setText('');

        axios.post(`${config.apiBaseUrl}`,
            {message: text},
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            })
            .then((res) => {
                let newMessage = {key: messages.length, user: "bot", messageText: res.data.message};
                setMessage(previousState => [...previousState, newMessage]);
            })
            .catch((error) => console.error(error));
    }

    for (let i = 0; i < messages.length; i++) {
        messages[i].user === "user" ?
            messageBubbles.push(<MyMessage key={`me-${messages[i].key}`} message={messages[i].messageText}/>) :
            messageBubbles.push(<BotResponse key={`bot-${messages[i].key}`} message={messages[i].messageText}/>);

    }

    return (
        <>
            <div className="messageForm">
                {messageBubbles}
            </div>

            <div className="test">
                <form
                    onSubmit={submit}
                    method="post"
                    action="/">
                <textarea
                    ref={messageInput}
                    value={text}
                    onKeyDown={onEnterPress}
                    onChange={handleChange}
                    id="messageField"
                    name="messageField"
                    placeholder="Type your message..."
                    maxLength="750"/>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}
