import { useEffect } from 'react';
import hoist from 'hoist-non-react-statics';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../../hocs/AppStateProvider';

export function withUserGuard(Component) {
  function WithUserGuard(props) {
    const { userName, roomName } = useAppState();
    const navigate = useNavigate();

    useEffect(() => {
      if (userName && roomName) return;

      navigate({
        pathname: '/',
      });
    }, [navigate, userName, roomName]);

    if (!userName || !roomName) return <div>fetching...</div>;
    return <Component {...props} />;
  }

  hoist(WithUserGuard, Component);

  WithUserGuard.type = 'USER_GUARD';
  WithUserGuard.displayName = `withUserGuard(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithUserGuard;
}
