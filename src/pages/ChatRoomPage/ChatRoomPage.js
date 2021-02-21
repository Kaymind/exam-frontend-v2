import styled from 'styled-components';
import { theme } from 'styled-tools';
import { fadeInFromBottom, fadeInFromBottomRight } from '../../lib/theme';
import { TextField } from '../../components/TextField';
import { Messages } from './components/Messages';

import { useAppState } from '../../hocs/AppStateProvider';

function ChatRoomPage({
  className,
  chatMessage,
  setChatMessage,
  handleSubmit,
  roomName,
  leaveChatRoom,
  ...props
}) {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <div className='title roomName'>
          <div>ห้อง {roomName}</div>
          <div className='leave-button' onClick={leaveChatRoom}>
            ออกจากห้องแชท
          </div>
        </div>
        <div className='message-container'>
          <Messages className='messages' />
          <TextField
            name='chatMessage'
            value={chatMessage}
            placeholderCustom='Enter เพื่อส่ง'
            chatBox
            onChange={(e) => setChatMessage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

const StyledChatRoomPage = styled(ChatRoomPage)`
  > form {
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

      display: flex;
      justify-content: space-between;
      align-items: center;

      > .leave-button {
        font-size: 16px;
        cursor: pointer;
        text-decoration: underline;

        &:hover {
          color: ${theme('colors.buttonHover')};
        }
      }
    }

    > .message-container {
      flex: 1;
      min-height: 50vh;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: ${fadeInFromBottomRight} 0.8s ease-out 0.1s backwards;

      ${Messages} {
        width: 100%;
        background: ${theme('colors.chatRoomBG')};
        border-radius: 20px;
        flex: 1;
        max-height: 85vh;
        padding: 10px 10px 60px;
        overflow: auto;
      }

      ${TextField} {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;

        &::placeholder {
          color: red;
          text-align: end;
          font-size: 40%;
          position: relative;
          bottom: -20%;
        }
      }
    }
  }
`;

export { StyledChatRoomPage as ChatRoomPage };
