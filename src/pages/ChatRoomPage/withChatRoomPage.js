import { useState, useEffect } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { useAppState } from '../../hocs/AppStateProvider';

export function withChatRoomPage(Component) {
  function WithChatRoomPage(props) {
    const [chatMessage, setChatMessage] = useState('');
    const {
      userName,
      messages,
      roomName,
      getChatHistory,
      setChatHistory,
      leaveChatRoom,
    } = useAppState();

    function handleSubmit(e) {
      e.preventDefault();
      if (!chatMessage) return;
      setChatHistory({ userName, roomName, message: chatMessage });
      setChatMessage('');
    }

    useEffect(() => {
      getChatHistory(roomName);
    }, []);

    const pageProps = {
      chatMessage,
      setChatMessage,
      handleSubmit,
      userName,
      roomName,
      messages,
      leaveChatRoom,
    };

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithChatRoomPage, Component);

  WithChatRoomPage.displayName = `withChatRoomPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithChatRoomPage;
}
