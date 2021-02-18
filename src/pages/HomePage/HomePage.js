import styled from 'styled-components';

function HomePage({ className, handleSubmit, formComponent, ...props }) {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>{formComponent(props)}</form>
    </div>
  );
}

const StyledHomePage = styled(HomePage)``;

export { StyledHomePage as HomePage };
