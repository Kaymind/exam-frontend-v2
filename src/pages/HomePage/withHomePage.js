import { useState, useMemo } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useLocalStorage, usePrevious } from '../../lib/hooks';

import { UserNameForm } from './components/UserNameForm';
import { CreateOrJoinForm } from './components/CreateOrJoinForm';
import { CreateRoomForm } from './components/CreateRoomForm';
import { JoinRoomForm } from './components/JoinRoomForm';
import { ChatRoom } from './components/ChatRoom';

export function withHomePage(Component) {
  function WithHomePage(props) {
    const formConfig = useMemo(
      () => ({
        user: {
          renderer: (props) => <UserNameForm {...props} />,
          nextStep: () => 'createOrJoin',
        },
        createOrJoin: {
          renderer: (props) => <CreateOrJoinForm {...props} />,
          nextStep: (prevStep) => prevStep,
        },
        createRoom: {
          renderer: (props) => <CreateRoomForm {...props} />,
          nextStep: () => 'chatRoom',
        },
        joinRoom: {
          renderer: (props) => <JoinRoomForm {...props} />,
          nextStep: () => 'chatRoom',
        },
        chatRoom: {
          renderer: (props) => <ChatRoom {...props} />,
        },
      }),
      []
    );

    const [messages, setMessages] = useLocalStorage('messages');
    const [userName, setUserName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [chatMessage, setChatMessage] = useState('');
    const [hasChatRoom, setHasChatRoom] = useState('');
    const [step, setStep] = useState(() => 'user');
    const previousStep = usePrevious(step, step);
    const formComponent = useMemo(
      () => (props) => formConfig[step].renderer(props),
      [step]
    );

    function handleSubmitMessage() {
      if (chatMessage === '') return;

      setMessages((prevState) => {
        const updatedState = {
          ...prevState[roomName],
          messages: [
            ...prevState[roomName].messages,
            { name: userName, message: chatMessage },
          ],
        };
        const newState = { ...prevState, [roomName]: updatedState };
        return newState;
      });

      setChatMessage('');
    }

    function handleSubmit(event) {
      event.preventDefault();
      switch (step) {
        case 'user': {
          break;
        }
        case 'createOrJoin': {
          break;
        }
        case 'createRoom': {
          setHasChatRoom('');
          setMessages((prevState) =>
            !prevState[roomName]
              ? {
                  ...prevState,
                  [roomName]: {
                    messages: [{ name: 'eiei', message: 'สวัสดี' }],
                  },
                }
              : prevState
          );
          break;
        }
        case 'joinRoom': {
          if (!messages[roomName]) {
            setHasChatRoom(!messages[roomName] ? 'ไม่มีห้องแชทที่ค้นหา' : '');
            return;
          }
          setHasChatRoom('');
          setMessages((prevState) =>
            !prevState[roomName]
              ? {
                  ...prevState,
                  [roomName]: {
                    messages: [{ name: 'eiei', message: 'สวัสดี' }],
                  },
                }
              : prevState
          );
          break;
        }
        case 'chatRoom': {
          break;
        }
        default:
          break;
      }

      setStep((curStep) => formConfig[curStep].nextStep());
    }

    function handleSubmitWithParams(params) {
      setStep((curStep) => formConfig[curStep].nextStep(params));
    }

    function handleGoBack() {
      setHasChatRoom('');
      setStep(() => previousStep ?? 'user');
    }

    const pageProps = {
      hasChatRoom,
      userName,
      setUserName,
      roomName,
      setRoomName,
      step,
      chatMessage,
      messages: messages[roomName]?.messages ?? [],
      handleSubmitMessage,
      setChatMessage,
      handleSubmit,
      handleSubmitWithParams,
      handleGoBack,
      formComponent,
    };

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithHomePage, Component);

  WithHomePage.displayName = `withHomePage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`;

  return WithHomePage;
}
