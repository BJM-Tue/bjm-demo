import { theme, Typography } from 'antd';
import styled from 'styled-components';
import { LoginForm } from '../components/auth';

const LOGIN = {
  WIDTH: 380,
};

const Login = () => {
  const { token } = theme.useToken();

  return (
    <LoginContainer
      style={{
        padding: token.paddingXL,
        borderRadius: token.borderRadius * 2,
        boxShadow: token.boxShadow,
      }}
    >
      <Typography.Title level={3} style={{ marginBottom: token.marginXL }}>
        ログイン
      </Typography.Title>
      <LoginForm />
    </LoginContainer>
  );
};

const LoginContainer = styled('div')({
  width: LOGIN.WIDTH,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export default Login;
