import hoistNonReactStatics from 'hoist-non-react-statics';

export function withCreateOrJoinForm(Component) {
  function WithCreateOrJoinForm(props) {
    return <Component {...props} />;
  }

  hoistNonReactStatics(WithCreateOrJoinForm, Component);

  WithCreateOrJoinForm.displayName = `withCreateOrJoinForm(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithCreateOrJoinForm;
}
