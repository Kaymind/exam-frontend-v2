import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useAppState } from '../../hocs/AppStateProvider';

export function withCreateRoomPage(Component) {
  function WithCreateRoomPage(props) {
    const inputRef = useRef();
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { createRoom, getChatHistory, messages } = useAppState();

    function handleSubmit(e) {
      e.preventDefault();

      if (roomName) {
        createRoom(roomName);
        if (!messages.length) {
          navigate('/chat-room');
        }
        setError('ชื่อนี้ถูกใช้งานแล้ว');
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
      navigate,
    };
    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithCreateRoomPage, Component);

  WithCreateRoomPage.displayName = `withCreateRoomPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithCreateRoomPage;
}
