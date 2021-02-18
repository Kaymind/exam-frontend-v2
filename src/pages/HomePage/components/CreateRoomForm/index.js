import { CreateRoomForm } from './CreateRoomForm';
import { withCreateRoomForm } from './withCreateRoomForm';

const ConnectedCreateRoomForm = withCreateRoomForm(CreateRoomForm);

export { ConnectedCreateRoomForm as CreateRoomForm };
