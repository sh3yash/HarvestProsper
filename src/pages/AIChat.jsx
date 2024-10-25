import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { chatSession } from '../utils/geminiutil';
import Spline from '@splinetool/react-spline';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ChatContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  padding: 20px;
  background: transparent;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #fff;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: transparent;
  border-radius: 10px;
`;

const Message = styled.div`
  margin: 10px 0;
  padding: 0; /* Remove padding */
  color: #00bcd4; /* Light blue color for the text */
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #e52e71, #ff8a00);
  }
`;

const AIChat = ({ isUser, text }) => (
  <Message isUser={isUser} dangerouslySetInnerHTML={{ __html: text }} />
);

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      const newMessages = [...messages, { text: userMessage, isUser: true }];
      setMessages(newMessages);
      setInput('');

      try {
        const modifiedInput = `You are an Agriculture Finance Advisor AI. Provide expert financial advice to farmers on topics like loans, investments, savings, and government schemes related to agriculture. Only respond to inquiries related to agricultural finance.` + userMessage;

        const result = await chatSession.sendMessage(modifiedInput);
        const ans = result.response.text();

        setMessages([...newMessages, { text: ans, isUser: false }]);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages([...newMessages, { text: "Error sending message", isUser: false }]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <>
      <Spline
        scene="https://prod.spline.design/alEU9ank5gZUHys8/scene.splinecode"
        style={{ position: 'absolute', width: '100%', height: '80%', zIndex: 0, pointerEvents: 'auto' }}
      />
      <ChatContainer style={animationProps}>
        <Header>
          <Title>Agriculture Finance Advisor</Title>
          <Description>Ask for financial advice tailored to your farming needs!</Description>
        </Header>
        <MessagesContainer>
          {messages.map((msg, index) => (
            <AIChat key={index} isUser={msg.isUser} text={msg.text} />
          ))}
        </MessagesContainer>
        <InputContainer>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <Button onClick={handleSend}>Send</Button>
        </InputContainer>
      </ChatContainer>
    </>
  );
};

export default ChatComponent;
