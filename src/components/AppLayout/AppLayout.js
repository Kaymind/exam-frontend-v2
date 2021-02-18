import styled from 'styled-components';
import { theme } from 'styled-tools';

import Logo from '../../assets/images/logo.png';
import BG from '../../assets/images/bg.jpg';

function AppLayout({ children, className }) {
  return (
    <div className={className}>
      <header className='header'>
        <img src={Logo} alt='brand-logo' />
      </header>
      <main className='main-content'>
        <div className='container'>{children}</div>
      </main>
      <img className='background-img' src={BG} alt='background' />
    </div>
  );
}

const StyledAppLayout = styled(AppLayout)`
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 20px;
    min-height: 50px;
    height: calc(10vh - 30px);

    > img {
      height: 100%;
      display: block;
    }
  }

  .main-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 90%;
    height: 90vh;
    background-color: ${theme('colors.white')};
    border-radius: 20px;
  }

  .background-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export { StyledAppLayout as AppLayout };
