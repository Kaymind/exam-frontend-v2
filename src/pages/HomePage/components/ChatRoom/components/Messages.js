import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';

import { Message } from './Message';

function Messages({ className, messages, ...props }) {
  return (
    <ScrollToBottom className={className}>
      {messages.map((msg, index) => (
        <Message key={index} msg={msg} {...props} />
      ))}
    </ScrollToBottom>
  );
}
const StyledMessages = styled(Messages)`
  display: flex;
  flex-direction: column;
`;

export { StyledMessages as Messages };
