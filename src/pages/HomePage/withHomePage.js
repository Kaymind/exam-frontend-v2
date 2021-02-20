import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useAppState } from '../../hocs/AppStateProvider';

export function withHomePage(Component) {
  function WithHomePage(props) {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const { addUserName } = useAppState();

    function handleSubmit(e) {
      e.preventDefault();
      if (userName) {
        addUserName(userName);
        navigate('/create-or-join');
      }
    }
    const pageProps = {
      userName,
      setUserName,
      handleSubmit,
    };
    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithHomePage, Component);

  WithHomePage.displayName = `withHomePage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithHomePage;
}
