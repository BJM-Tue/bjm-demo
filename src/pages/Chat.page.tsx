import { Space, theme, Typography } from 'antd';
import { Catalog, ChatInput } from '../components';
import styled from 'styled-components';

const Chat = () => {
  const { token } = theme.useToken();

  return (
    <ChatContainer>
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
      <ScrollContainer style={{ paddingBottom: token.paddingMD }}>
        <Catalog />
      </ScrollContainer>
      <ChatInputContainer style={{ padding: token.paddingMD, boxShadow: token.boxShadow }}>
        <ChatInput />
      </ChatInputContainer>
    </ChatContainer>
  );
};

const ChatContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
});

const ScrollContainer = styled('div')({
  flex: 1,
  overflowY: 'auto',
});

const ChatInputContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default Chat;
