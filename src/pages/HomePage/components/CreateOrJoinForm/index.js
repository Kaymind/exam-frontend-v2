import { CreateOrJoinForm } from './CreateOrJoinForm';
import { withCreateOrJoinForm } from './withCreateOrJoin';

const ConnectedCreateOrJoinForm = withCreateOrJoinForm(CreateOrJoinForm);

export { ConnectedCreateOrJoinForm as CreateOrJoinForm };
