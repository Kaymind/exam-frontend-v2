import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledButton = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))`
  font-family: inherit;
  width: fit-content;
  background: transparent;
  font-size: 24px;
  padding: 16px 36px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${theme('colors.buttonText')};
  outline: none;

  &:hover {
    color: ${theme('colors.buttonHover')};
  }
`;

const StyledFilledButton = styled(StyledButton)`
  width: fit-content;
  color: ${theme('colors.white')};
  padding: 16px 36px;
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    ${theme('colors.gradientPrimary')} 0%,
    ${theme('colors.gradientSecondary')} 100%
  );

  &:hover {
    color: ${theme('colors.white')};
  }
`;

function SubmitButton({ className, children, ...props }) {
  return (
    <StyledButton className={className} {...props} type='submit'>
      {children}
    </StyledButton>
  );
}

const StyledSubmitButton = styled(SubmitButton)`
  width: fit-content;
  color: ${theme('colors.white')};
  padding: 16px 36px;
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    ${theme('colors.gradientPrimary')} 0%,
    ${theme('colors.gradientSecondary')} 100%
  );

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    color: ${theme('colors.white')};
  }
`;

export {
  StyledButton as Button,
  StyledFilledButton as FilledButton,
  StyledSubmitButton as SubmitButton,
};
