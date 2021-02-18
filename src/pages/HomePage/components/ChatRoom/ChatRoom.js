import styled from 'styled-components';
import { theme } from 'styled-tools';
import { fadeInFromBottom, fadeInFromRight } from '../../../../lib/theme';

import { TextField } from '../../../../components/TextField';
import { Messages } from './components/Messages';

function ChatRoom({
  className,
  chatMessage,
  setChatMessage,
  handleSubmitMessage,
  roomName,
  ...props
}) {
  return (
    <div className={className}>
      <div className='title roomName'>ห้อง {roomName}</div>
      <div className='message-container'>
        <Messages className='messages' {...props} />
        <TextField
          name='chatMessage'
          value={chatMessage}
          placeholderCustom='Enter เพื่อส่ง'
          chatBox
          onChange={(event) => setChatMessage(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleSubmitMessage();
            }
          }}
        />
      </div>
    </div>
  );
}

const StyledChatRoom = styled(ChatRoom)`
  width: 100%;
  height: 90vh;
  padding: 6px 30px 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .roomName {
    width: 100%;
    text-align: left;
    position: relative;
    animation: ${fadeInFromBottom} 0.8s ease-out;
  }

  > .message-container {
    flex: 1;
    min-height: 50vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Messages} {
      width: 100%;
      background: ${theme('colors.chatRoomBG')};
      border-radius: 20px;
      flex: 1;
      max-height: 85vh;
      padding: 10px 10px 60px;
      overflow: auto;
      animation: ${fadeInFromRight} 0.7s ease-out backwards;
    }

    ${TextField} {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      animation: ${fadeInFromBottom} 0.8s ease-out 0.1s backwards;

      &::placeholder {
        color: red;
        text-align: end;
        font-size: 40%;
        position: relative;
        bottom: -20%;
      }
    }
  }
`;

export { StyledChatRoom as ChatRoom };
