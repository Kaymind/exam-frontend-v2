import hoistNonReactStatics from 'hoist-non-react-statics';

export function withUserNameForm(Component) {
  function WithUserNameForm(props) {
    return <Component {...props} />;
  }

  hoistNonReactStatics(WithUserNameForm, Component);

  WithUserNameForm.displayName = `withUserNameForm(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithUserNameForm;
}
