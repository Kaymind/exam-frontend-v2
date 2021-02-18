import { JoinRoomForm } from './JoinRoomForm';
import { withJoinRoomForm } from './withJoinRoomForm';

const ConnectedJoinRoomForm = withJoinRoomForm(JoinRoomForm);

export { ConnectedJoinRoomForm as JoinRoomForm };
