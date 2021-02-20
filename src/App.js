import { useRoutes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { withUserGuard } from './pages/ChatRoomPage/hocs/withUserGuard';

import { HomePage } from './pages/HomePage';
import { CreateOrJoinPage } from './pages/CreateOrJoinPage';
import { CreateRoomPage } from './pages/CreateRoomPage';
import { JoinRoomPage } from './pages/JoinRoomPage';
import { ChatRoomPage } from './pages/ChatRoomPage';

function App() {
  const AuthenticatedAppLayout = withUserGuard(AppLayout);
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <AppLayout>
          <HomePage />
        </AppLayout>
      ),
    },
    {
      path: '/create-or-join',
      element: (
        <AppLayout>
          <CreateOrJoinPage />
        </AppLayout>
      ),
    },
    {
      path: '/create',
      element: (
        <AppLayout>
          <CreateRoomPage />
        </AppLayout>
      ),
    },
    {
      path: '/join',
      element: (
        <AppLayout>
          <JoinRoomPage />
        </AppLayout>
      ),
    },
    {
      path: '/chat-room',
      element: (
        <AuthenticatedAppLayout>
          <ChatRoomPage />
        </AuthenticatedAppLayout>
      ),
    },
    {
      path: '/*',
      element: <h1>Page not found</h1>,
    },
  ]);
  return routes;
}

export default App;
