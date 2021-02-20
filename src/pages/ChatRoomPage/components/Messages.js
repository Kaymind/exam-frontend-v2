import styled from 'styled-components';
import { theme } from 'styled-tools';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Message } from './Message';
import { useAppState } from '../../../hocs/AppStateProvider';

function Messages({ className, ...props }) {
  const { roomName, userName = '', messages = {} } = useAppState();

  return (
    <ScrollToBottom className={className}>
      {messages.map((msg, index) => (
        <Message key={index} msg={msg} userName={userName} />
      ))}
    </ScrollToBottom>
  );
}
const StyledMessages = styled(Messages)`
  display: flex;
  flex-direction: column;
`;

export { StyledMessages as Messages };
