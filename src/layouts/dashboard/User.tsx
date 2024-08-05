import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, message, Space, theme, Typography } from 'antd';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    key: 'logout',
    label: 'ログアウト',
    icon: <LogoutOutlined />,
  },
];

const User = () => {
  const { token } = theme.useToken();

  return (
    <Space
      align="center"
      style={{
        justifyContent: 'space-between',
        paddingInline: token.paddingXS,
      }}
    >
      <Space align="center">
        <Typography.Text>
          <UserOutlined />
        </Typography.Text>
        <Typography.Paragraph ellipsis>
          User User User User User User User User
        </Typography.Paragraph>
      </Space>
      <Dropdown menu={{ items, onClick }} trigger={['click']}>
        <Typography.Text style={{ cursor: 'pointer' }}>
          <SettingOutlined />
        </Typography.Text>
      </Dropdown>
    </Space>
  );
};

export default User;
