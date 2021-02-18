import styled from 'styled-components';
import { fadeInFromBottom } from '../../../../lib/theme';

import { TextField } from '../../../../components/TextField';
import { SubmitButton, Button } from '../../../../components/Button';

function JoinRoomForm({
  className,
  userName,
  setRoomName,
  roomName,
  handleGoBack,
  hasChatRoom,
  ...props
}) {
  return (
    <div className={className}>
      <TextField
        name='roomName'
        title='เข้าร่วมแชท'
        autoComplete={false}
        placeholder='ชื่อห้อง'
        error={hasChatRoom}
        withError
        onChange={(e) => setRoomName(e.target.value)}
      />
      <div className='button-wrapper'>
        <Button onClick={handleGoBack}>กลับ</Button>
        <SubmitButton disabled={!roomName}>ยืนยัน</SubmitButton>
      </div>
    </div>
  );
}

const StyledJoinRoomForm = styled(JoinRoomForm)`
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${TextField} {
    width: 100%;
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-out;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-in 0.15s backwards;

    ${SubmitButton} {
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;

export { StyledJoinRoomForm as JoinRoomForm };
