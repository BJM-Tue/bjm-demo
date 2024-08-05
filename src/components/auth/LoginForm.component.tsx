import { useNavigate } from 'react-router-dom';
import { Button, Input, theme, Typography } from 'antd';
import { BarcodeOutlined, EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { PATH_DASHBOARD } from '../../routes/path';

const LoginForm = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const handleLogin = () => {
    navigate(PATH_DASHBOARD.chat);
  };
  return (
    <>
      <LoginFormContainer>
        <Input
          size="large"
          placeholder="ユーザーIDを入力してください"
          prefix={<UserOutlined style={{ marginRight: token.marginXXS }} />}
        />
        <Input.Password
          size="large"
          placeholder="パスワードを入力"
          prefix={<BarcodeOutlined style={{ marginRight: token.marginXXS }} />}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Typography.Link>パスワードを忘れた場合</Typography.Link>
      </LoginFormContainer>
      <Button type="primary" onClick={handleLogin} style={{ marginTop: token.marginXL }}>
        ログイン
      </Button>
    </>
  );
};

const LoginFormContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  '& span': {
    marginBlock: 5,
  },
});

export default LoginForm;
