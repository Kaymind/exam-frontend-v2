import { ChatRoomPage } from './ChatRoomPage';
import { withChatRoomPage } from './withChatRoomPage';

const connectedChatRoomPage = withChatRoomPage(ChatRoomPage);

export { connectedChatRoomPage as ChatRoomPage };
