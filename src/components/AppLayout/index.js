import { AppLayout } from './AppLayout';
import { withAppLayout } from './withAppLayout';

const connectedAppLayout = withAppLayout(AppLayout);

export { connectedAppLayout as AppLayout };
