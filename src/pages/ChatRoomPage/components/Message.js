import styled from 'styled-components';
import { theme } from 'styled-tools';

function Message({ className, msg: { name, message }, userName, ...props }) {
  const isSentByCurrentUser = name === userName;
  return (
    <div className={className}>
      <div
        className={`message-item ${
          isSentByCurrentUser ? 'isSentByCurrentUser' : ''
        }`}
      >
        <span className='userName'>
          {isSentByCurrentUser ? name : `คุณ ${name}`}
        </span>
        {message}
      </div>
    </div>
  );
}

const StyledMessage = styled(Message)`
  display: flex;
  flex-direction: column;

  .message-item {
    width: fit-content;
    max-width: 50%;
    min-height: 30px;
    min-width: 100px;
    padding: 10px 20px;
    border-radius: 6px;
    background: ${theme('colors.messageBox')};
    position: relative;
    overflow: visible;
    margin: 30px 20px;
    font-size: 20px;
    font-weight: bold;
    overflow-wrap: anywhere;

    .userName {
      font-size: 16px;
      font-weight: normal;
      position: absolute;
      top: -24px;
      left: -10px;
    }

    &.isSentByCurrentUser {
      align-self: flex-end;
    }
  }
`;

export { StyledMessage as Message };
