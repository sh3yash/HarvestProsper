import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { chatSession } from '../utils/geminiutil';

// Light and Dark theme definitions
const lightTheme = {
  background: '#f9f9f9',
  text: '#333',
  navbar: '#333',
  navbarText: '#fff',
  messageBackground: '#fff',
  userMessageBackground: '#e1ffc7',
  inputBackground: '#fff',
  inputText: '#333',
  buttonBackground: '#28a745',
  buttonText: '#fff',
  buttonHoverBackground: '#218838',
};

const darkTheme = {
  background: '#2d2d2d',
  text: '#fff',
  navbar: '#444',
  navbarText: '#fff',
  messageBackground: '#333',
  userMessageBackground: '#3c4e59',
  inputBackground: '#333',
  inputText: '#fff',
  buttonBackground: '#666',
  buttonText: '#fff',
  buttonHoverBackground: '#777',
};

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
  background: ${props => props.theme.background};
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.text};
`;

const Description = styled.p`
  font-size: 1.2em;
  color: ${props => props.theme.text};
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: ${props => props.theme.messageBackground};
  border-radius: 10px;
`;

const Message = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${props => props.theme.text};
  background: ${props => (props.isUser ? props.theme.userMessageBackground : props.theme.messageBackground)};
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
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
  background: ${props => props.theme.inputBackground};
  color: ${props => props.theme.inputText};
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonText};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.buttonHoverBackground};
  }
`;

const AIChat = ({ isUser, text }) => (
  <Message isUser={isUser} dangerouslySetInnerHTML={{ __html: text }} />
);

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState(lightTheme);

  const handleThemeToggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

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

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <ThemeProvider theme={theme}>
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
            placeholder="Type your message..."
          />
          <Button onClick={handleSend}>Send</Button>
        </InputContainer>
        <Button onClick={handleThemeToggle}>
          {theme === lightTheme ? <BsToggle2Off /> : <BsToggle2On />}
        </Button>
      </ChatContainer>
    </ThemeProvider>
  );
};

export default ChatComponent;
