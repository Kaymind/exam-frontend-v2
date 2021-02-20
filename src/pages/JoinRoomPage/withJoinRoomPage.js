import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useAppState } from '../../hocs/AppStateProvider';

export function withJoinRoomPage(Component) {
  function WithJoinRoomPage(props) {
    const inputRef = useRef();
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { joinRoom, messages, getChatHistory } = useAppState();
    const hasChatRoom = !!messages.length;

    function handleSubmit(e) {
      e.preventDefault();

      if (roomName) {
        joinRoom(roomName);
        if (hasChatRoom) {
          navigate('/chat-room');
        } else {
          setError('ไม่มีห้องแชทที่คุณค้นหา');
        }
      } else {
        setError('กรุณาระบุชื่อห้องแชท');
      }
    }

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    useEffect(() => {
      getChatHistory(roomName);
    }, [roomName]);

    const pageProps = {
      handleSubmit,
      roomName,
      setRoomName,
      error,
      setError,
      inputRef,
    };

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithJoinRoomPage, Component);

  WithJoinRoomPage.displayName = `withJoinRoomPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithJoinRoomPage;
}
