import React from 'react';

export default function BotResponse({message}) {
    return(
        <div className="bot-message">
            <span>{message}</span>
        </div>
    )
}
