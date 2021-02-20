import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../hocs/AppStateProvider';
import styled from 'styled-components';
import { fadeInFromBottom } from '../../lib/theme';
import { FilledButton, Button } from '../../components/Button';

function CreateOrJoinPage({ className, ...props }) {
  const navigate = useNavigate();
  const { userName } = useAppState();

  return (
    <div className={className}>
      <h1 className='title'>คุณ {userName}</h1>
      <div className='button-wrapper fade-in-bottom'>
        <FilledButton onClick={() => navigate('/create')}>
          สร้างห้องใหม่
        </FilledButton>
        <Button onClick={() => navigate('/join')}>เข้าร่วมแชท</Button>
      </div>
    </div>
  );
}

const StyledCreateOrJoinPage = styled(CreateOrJoinPage)`
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin: 50px;
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-out;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > * {
      margin-bottom: 10px;
    }

    ${FilledButton} {
      position: relative;
      animation: ${fadeInFromBottom} 0.6s ease-out;
    }

    ${Button} {
      position: relative;
      animation: ${fadeInFromBottom} 0.6s ease-out 0.2s backwards;
    }
  }
`;

export { StyledCreateOrJoinPage as CreateOrJoinPage };
