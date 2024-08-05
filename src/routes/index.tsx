import { lazy, LazyExoticComponent, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Loading } from '../components';
import DashboardLayout from '../layouts/dashboard';
import AuthLayout from '../layouts/auth';
import {
  CHAT_PATH,
  LOGIN_PATH,
  PATH_AUTH,
  PATH_DASHBOARD,
  ROOT_AUTH,
  ROOT_DASHBOARD,
} from './path';

const PageLoader =
  (Component: LazyExoticComponent<(props: any) => JSX.Element>) => (props: any) => {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };

const Router = () => {
  return useRoutes([
    // Dashboard routes
    {
      path: ROOT_DASHBOARD,
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to={PATH_DASHBOARD.chat} replace /> },
        { path: CHAT_PATH, element: <Chat /> },
      ],
    },
    // Auth routes
    {
      path: ROOT_AUTH,
      element: <AuthLayout />,
      children: [
        { path: '', element: <Navigate to={PATH_AUTH.login} replace /> },
        { path: LOGIN_PATH, element: <Login /> },
      ],
    },
    // Not found route
    {
      path: '*',
      element: <Navigate to={PATH_AUTH.login} replace />,
    },
  ]);
};

const Chat = PageLoader(lazy(() => import('../pages/Chat.page')));
const Login = PageLoader(lazy(() => import('../pages/Login.page')));

export default Router;
