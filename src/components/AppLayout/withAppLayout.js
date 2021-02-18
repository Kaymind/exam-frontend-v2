import hoistNonReactStatics from 'hoist-non-react-statics';

export function withAppLayout(Component) {
  function WithAppLayout(props) {
    return <Component {...props} />;
  }

  hoistNonReactStatics(WithAppLayout, Component);

  WithAppLayout.displayName = `withAppLayout(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithAppLayout;
}
