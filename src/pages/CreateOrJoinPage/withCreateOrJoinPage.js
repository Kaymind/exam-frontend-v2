import hoistNonReactStatics from 'hoist-non-react-statics';

export function withCreateOrJoinPage(Component) {
  function WithCreateOrJoinPage(props) {
    return <Component {...props} />;
  }

  hoistNonReactStatics(WithCreateOrJoinPage, Component);

  WithCreateOrJoinPage.displayName = `withCreateOrJoinPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithCreateOrJoinPage;
}
