import hoistNonReactStatics from 'hoist-non-react-statics';

export function withChatRoom(Component) {
  function WithChatRoom(props) {
    return <Component {...props} />;
  }

  hoistNonReactStatics(WithChatRoom, Component);

  WithChatRoom.displayName = `withChatRoom(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithChatRoom;
}
