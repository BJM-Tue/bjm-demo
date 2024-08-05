import { Space, theme, Typography } from 'antd';
import { Catalog, ChatInput } from '../components';
import styled from 'styled-components';

const CHAT = {
  INPUT: {
    HEIGHT: 100,
  },
};

const Chat = () => {
  const { token } = theme.useToken();

  return (
    <Space direction="vertical" size={0} style={{ position: 'relative' }}>
      <Space
        direction="vertical"
        size={0}
        style={{
          padding: token.paddingMD,
          marginBottom: token.marginMD,
        }}
      >
        <Typography.Text style={{ fontSize: token.fontSizeHeading3, fontWeight: 'bold' }}>
          testRole0620Aさん、こんにちは。
        </Typography.Text>
        <Typography.Text style={{ fontSize: token.fontSizeHeading3, fontWeight: 'bold' }}>
          どのようなご要件でしょうか？
        </Typography.Text>
      </Space>
      <Catalog />
      <InputContainer align="center" style={{ justifyContent: 'center' }}>
        <ChatInput />
      </InputContainer>
    </Space>
  );
};

const InputContainer = styled(Space)({
  height: CHAT.INPUT.HEIGHT,
  position: 'absolute',
  bottom: 0,
});

export default Chat;
