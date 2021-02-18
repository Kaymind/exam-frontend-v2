import { UserNameForm } from './UserNameForm';
import { withUserNameForm } from './withUserNameForm';

const connectedUserNameForm = withUserNameForm(UserNameForm);

export { connectedUserNameForm as UserNameForm };
