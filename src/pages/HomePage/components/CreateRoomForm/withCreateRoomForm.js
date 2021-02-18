import hoistNonReactStatics from 'hoist-non-react-statics';

export function withCreateRoomForm(Component) {
  function WithCreateRoomForm(props) {
    return <Component {...props} />;
  }

  hoistNonReactStatics(WithCreateRoomForm, Component);

  WithCreateRoomForm.displayName = `withCreateRoomForm(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithCreateRoomForm;
}
