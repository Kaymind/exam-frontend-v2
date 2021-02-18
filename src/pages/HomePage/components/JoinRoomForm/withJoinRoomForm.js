import hoistNonReactStatics from 'hoist-non-react-statics';

export function withJoinRoomForm(Component) {
  function WithJoinRoomForm(props) {
    return <Component {...props} />;
  }

  hoistNonReactStatics(WithJoinRoomForm, Component);

  WithJoinRoomForm.displayName = `withJoinRoomForm(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithJoinRoomForm;
}
