import { ChatRoom } from './ChatRoom';
import { withChatRoom } from './withChatRoom';

const connectedChatRoom = withChatRoom(ChatRoom);

export { connectedChatRoom as ChatRoom };
