import React, { useEffect, useState } from 'react';
import './Advisor.css'; // Ensure you have this CSS file

const AdvisorChat = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Automatically open the chat when the component mounts
        setIsOpen(true);
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'Farmer' }]);
            setInput('');
            // Simulate a response from the advisor
            setTimeout(() => {
                setMessages((prev) => [...prev, { text: 'Advisor response to: ' + input, sender: 'Advisor' }]);
            }, 1000);
        }
    };

    return (
        <div>
            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <h2>Chat</h2>
                        <button onClick={() => setIsOpen(false)} className="close-button">X</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === 'Farmer' ? 'message farmer' : 'message advisor'}>
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AdvisorChat;
