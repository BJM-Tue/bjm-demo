import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Modal, Space, theme, Typography } from 'antd';
import { PATH_AUTH } from '../../routes/path';

const items: MenuProps['items'] = [
  {
    key: 'logout',
    label: 'ログアウト',
    icon: <LogoutOutlined />,
  },
];

const User = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [modal, contextHolder] = Modal.useModal();

  const handleLogout = () => {
    modal.confirm({
      centered: true,
      title: 'ログアウトしますか？',
      content: 'ログアウトすると、再度ログインが必要です。',
      okButtonProps: { danger: true },
      okText: 'ログアウト',
      onOk: () => {
        navigate(PATH_AUTH.login);
      },
    });
  };
  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'logout':
        handleLogout();
        break;
      default:
        break;
    }
  };
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
      {contextHolder}
    </Space>
  );
};

export default User;
