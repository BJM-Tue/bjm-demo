import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import Sider from './Sider.layout';

const DashboardLayout = () => {
  const { token } = theme.useToken();

  return (
    <Layout style={{ backgroundColor: token.colorBgContainer }}>
      <Sider />
      <Outlet />
    </Layout>
  );
};

export default DashboardLayout;
