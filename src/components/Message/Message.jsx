import { TextMessage, MessageContainer } from './Message.styled';

export const Message = ({ text }) => {
  return (
    <MessageContainer>
      <TextMessage>{text}</TextMessage>
    </MessageContainer>
  );
};
