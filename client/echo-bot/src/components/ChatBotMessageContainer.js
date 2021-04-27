import React from "react";
import MyMessage from "./MyMessage";
import BotResponse from "./BotResponse";

export default function ChatBotMessageContainer({messages}){
    const messageBubbles = [];

    for (let i = 0; i < messages.length; i++) {
        messages[i].user === "user" ?
            messageBubbles.push(<MyMessage key={`me-${messages[i].key}`} message={messages[i].messageText}/>) :
            messageBubbles.push(<BotResponse key={`bot-${messages[i].key}`} message={messages[i].messageText}/>);

    }

    return(
        <div className="message-container">
            {messageBubbles}
        </div>
    )
}
