import { createContext, useReducer, useContext } from 'react';

import {
  localStorageSerializer,
  localStorageDeserializer,
  localStorageRemoveItem,
} from '../lib/util';

const AppStateContext = createContext({
  userName: '',
  roomName: '',
  messages: {},
  duplicateRoomName: false,
});

function fetchMessages(roomName) {
  const chatHistory = localStorageDeserializer('chatHistory');
  if (roomName) {
    if (chatHistory) {
      return chatHistory;
    } else {
      return {};
    }
  } else {
    return {};
  }
}

function addMessages({ userName, roomName, message }) {
  const oldChatHistory = fetchMessages(roomName);
  const oldChatMessages = oldChatHistory[roomName]?.messages ?? [];

  const newChatHistory = {
    ...oldChatHistory,
    [roomName]: {
      ...oldChatHistory[roomName],
      messages: [...oldChatMessages, { name: userName, message }],
    },
  };

  localStorageSerializer('chatHistory', newChatHistory);
  return newChatHistory;
}

function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_USER': {
      return { ...state, userName: action.payload };
    }
    case 'CREATE_ROOM': {
      return {
        ...state,
        roomName: action.payload.roomName,
        messages: action.payload.messages,
        duplicateRoomName: action.payload.duplicateRoomName,
      };
    }
    case 'JOIN_ROOM': {
      return {
        ...state,
        roomName: action.payload.roomName,
        messages: action.payload.messages,
      };
    }
    case 'FETCH_MESSAGES': {
      return {
        ...state,
        roomName: action.payload,
        messages: fetchMessages(action.payload),
      };
    }
    case 'SET_MESSAGES': {
      return {
        ...state,
        messages: addMessages(action.payload),
      };
    }
    case 'LEAVE_CHAT_ROOM': {
      return {
        ...state,
        userName: '',
        roomName: '',
        messages: {},
        duplicateRoomName: false,
      };
    }
    default: {
      return state;
    }
  }
}

export function AppContextProvider({ children }) {
  const [
    { userName, roomName, messages, duplicateRoomName },
    dispatch,
  ] = useReducer(appReducer, {
    userName: localStorageDeserializer('userName') ?? '',
    roomName: localStorageDeserializer('roomName') ?? '',
    messages: {},
  });
  const messagesToMap = messages[roomName]?.messages ?? [];

  function getChatHistory(roomName) {
    dispatch({ type: 'FETCH_MESSAGES', payload: roomName });
  }

  function addUserName(name) {
    localStorageSerializer('userName', name);
    dispatch({ type: 'ADD_USER', payload: name });
  }

  function createRoom(roomName) {
    const oldChatHistory = fetchMessages(roomName);
    const newChatHistory = oldChatHistory[roomName]
      ? { ...oldChatHistory }
      : {
          ...oldChatHistory,
          [roomName]: { messages: [{ name: 'eiei', message: 'สวัสดี' }] },
        };
    const duplicateRoomName = !!oldChatHistory[roomName];
    localStorageSerializer('roomName', roomName);
    localStorageSerializer('chatHistory', newChatHistory);

    dispatch({
      type: 'CREATE_ROOM',
      payload: { roomName, messages: newChatHistory, duplicateRoomName },
    });
  }

  function joinRoom(roomName) {
    const oldChatHistory = fetchMessages(roomName);
    localStorageSerializer('roomName', roomName);
    dispatch({
      type: 'JOIN_ROOM',
      payload: { roomName, messages: oldChatHistory },
    });
  }

  function setChatHistory({ userName, roomName, message }) {
    dispatch({
      type: 'SET_MESSAGES',
      payload: { userName, roomName, message },
    });
  }

  function leaveChatRoom() {
    localStorageRemoveItem('userName');
    localStorageRemoveItem('roomName');
    dispatch({
      type: 'LEAVE_CHAT_ROOM',
    });
  }

  const value = {
    messages: messagesToMap,
    duplicateRoomName,
    userName,
    roomName,
    addUserName,
    createRoom,
    joinRoom,
    getChatHistory,
    setChatHistory,
    leaveChatRoom,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}
