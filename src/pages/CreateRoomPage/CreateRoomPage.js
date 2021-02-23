import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fadeInFromBottom } from '../../lib/theme';

import { TextField } from '../../components/TextField';
import { SubmitButton, Button } from '../../components/Button';

function CreateRoomPage({
  className,
  roomName,
  setRoomName,
  handleSubmit,
  error,
  inputRef,
  navigate,
  ...props
}) {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <h1 className='title'>สร้างห้องใหม่</h1>
        <TextField
          ref={inputRef}
          name='roomName'
          autoComplete={false}
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

const StyledCreateRoomPage = styled(CreateRoomPage)`
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
      position: relative;
    }

    .button-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      ${SubmitButton} {
        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;

export { StyledCreateRoomPage as CreateRoomPage };
