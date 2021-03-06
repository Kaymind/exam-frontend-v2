import styled from 'styled-components';
import { fadeInFromBottom } from '../../lib/theme';

import { TextField } from '../../components/TextField';
import { SubmitButton, Button } from '../../components/Button';

function JoinRoomPage({
  className,
  userName,
  setRoomName,
  roomName,
  handleSubmit,
  error,
  inputRef,
  navigate,
  ...props
}) {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <h1 className='title'>เข้าร่วมแชท</h1>
        <TextField
          ref={inputRef}
          name='roomName'
          autoComplete={false}
          placeholder='ชื่อห้อง'
          error={error}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <div className='button-wrapper'>
          <Button onClick={() => navigate(-1)}>กลับ</Button>
          <SubmitButton>ยืนยัน</SubmitButton>
        </div>
      </form>
    </div>
  );
}

const StyledJoinRoomPage = styled(JoinRoomPage)`
  > form {
    width: 60%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-in 0.15s backwards;

    > .title {
      margin-bottom: 40px;
    }

    ${TextField} {
      width: 100%;
    }

    .button-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      ${SubmitButton} {
        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;

export { StyledJoinRoomPage as JoinRoomPage };
