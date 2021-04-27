import React from "react";
import axios from "axios";
import config from "../config";

export default function ChatbotForm({messages, setMessage, text, setText}) {
    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            if (e.target.value !== '') {
                submit(e);
                setText('');
            }
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const submit = function (event) {
        event.preventDefault();
        if (text !== '') {
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
    }
    return (
        <div className="chatbot-form">
            <form
                onSubmit={submit}
                method="post"
                action="/">
                    <textarea
                        value={text}
                        onKeyDown={onEnterPress}
                        onChange={handleChange}
                        placeholder="Type your message..."
                        maxLength="750"/>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}
