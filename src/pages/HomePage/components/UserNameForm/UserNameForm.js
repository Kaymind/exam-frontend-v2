import { useState } from 'react';
import styled from 'styled-components';
import { fadeInFromBottom } from '../../../../lib/theme';

import { TextField } from '../../../../components/TextField';
import { SubmitButton } from '../../../../components/Button';

function UserNameForm({ className, setUserName, userName, ...props }) {
  return (
    <div className={className}>
      <TextField
        name='userName'
        title='ชื่อของคุณ'
        autoComplete={false}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {!!userName && (
        <SubmitButton className='fade-in-bottom'>ยืนยัน</SubmitButton>
      )}
    </div>
  );
}

const StyledUserNameForm = styled(UserNameForm)`
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${TextField} {
    width: 100%;
  }

  .fade-in-bottom {
    position: relative;
    animation: ${fadeInFromBottom} 0.4s ease-out;
  }
`;

export { StyledUserNameForm as UserNameForm };
