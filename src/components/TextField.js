import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

const Container = styled.div``;

const Input = styled.input`
  width: 100%;
`;

function TextField({
  className,
  title = '',
  error,
  placeholder = '',
  autoComplete = true,
  placeholderCustom,
  withError = false,
  chatBox = false,
  ...props
}) {
  const type = 'input';
  const showError = error;

  return (
    <Container className={className}>
      {!!title && <div className='title'>{title}</div>}
      <div
        className={`input-group ${chatBox ? 'chat-box' : ''}   ${
          withError ? 'with-error' : ''
        }`}
      >
        {placeholderCustom && (
          <span className='placeholder'>{placeholderCustom}</span>
        )}
        <Input
          as={type}
          {...props}
          placeholder={placeholder}
          error={showError}
          autoComplete={autoComplete ? 'on' : 'off'}
        />
        {showError && <div className='error'>{error}</div>}
      </div>
    </Container>
  );
}

const StyledTextField = styled(TextField)`
  > .title {
    margin-bottom: ${ifProp('compact', '0', '40px')};
  }

  ${Input} {
    font-family: inherit;
    font-size: 34px;
    color: ${theme('colors.inputText')};
    padding: ${ifProp('compact', '0px 20px', '15px 20px')};
    border-radius: 10px;
    border: 3px solid ${theme('colors.inputBorder')};
    outline: none;
    height: 60px;

    &::placeholder {
      color: ${theme('colors.buttonText')};
      font-weight: normal;
      text-align: center;
    }
  }

  > .input-group {
    position: relative;
    &:not(.with-error) {
      margin-bottom: 40px;
    }

    &.with-error {
      min-height: 100px;
    }

    &.chat-box {
      min-height: initial;
      margin-bottom: 0px;
    }

    > .error {
      margin-top: 10px;
      font-weight: bold;
      color: ${theme('colors.error')};
      display: flex;
      align-items: center;
    }

    > .placeholder {
      color: ${theme('colors.inputText')};
      position: absolute;
      bottom: 0;
      right: 12px;
    }
  }
`;

export { StyledTextField as TextField };
