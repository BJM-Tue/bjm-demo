import { Outlet } from 'react-router-dom';
import { Space } from 'antd';
import styled from 'styled-components';

const AuthLayout = () => {
  return (
    <Layout align="center">
      <Outlet />
    </Layout>
  );
};

const Layout = styled(Space)({
  justifyContent: 'center',
  height: '100vh',
});

export default AuthLayout;
