import { useAppState } from '../../hocs/AppStateProvider';
import { useNavigate } from 'react-router-dom';
import hoistNonReactStatics from 'hoist-non-react-statics';

export function withCreateOrJoinPage(Component) {
  function WithCreateOrJoinPage(props) {
    const navigate = useNavigate();
    const { userName } = useAppState();

    const pageProps = {
      navigate,
      userName,
    };

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithCreateOrJoinPage, Component);

  WithCreateOrJoinPage.displayName = `withCreateOrJoinPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithCreateOrJoinPage;
}
