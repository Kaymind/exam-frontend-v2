import { keyframes } from 'styled-components';

const colors = {
  white: '#ffffff',
  title: '#383838',
  gradientPrimary: '#c41417',
  gradientSecondary: '#b31315',
  buttonText: '#6f6f6f',
  buttonHover: '#c41417',
  inputText: '#4e4e4e',
  inputBorder: 'lightgray',
  chatRoomBG: '#f1f1f1',
  messageBox: '#ddd',
  error: '#c41417',
};

export const theme = {
  colors,
};

export const fadeInFromBottom = keyframes`
0% { bottom: -10px; opacity: 0; }
100% { bottom: 0px; opacity: 1; }
`;

export const fadeInFromBottomRight = keyframes`
0% { bottom: -10px; right: -10px; opacity: 0; }
100% { bottom: 0px; right: 0px; opacity: 1; }
`;
