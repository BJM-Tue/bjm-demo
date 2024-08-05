import { Button, Input, theme } from 'antd';
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ChatInput = () => {
  const { token } = theme.useToken();

  return (
    <ChatInputContainer>
      <TextAreaContainer>
        <Input.TextArea
          autoSize={{ maxRows: 4 }}
          style={{ paddingBlock: token.paddingMD, paddingLeft: token.padding * 3.5 }}
        />
        <UploadIcon type="text" shape="circle" icon={<PaperClipOutlined />} />
      </TextAreaContainer>
      <Button type="primary" icon={<SendOutlined />} style={{ marginLeft: token.marginMD }}>
        送信
      </Button>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TextAreaContainer = styled('div')({
  position: 'relative',
  width: '70%',
});

const UploadIcon = styled(Button)({
  position: 'absolute',
  left: '2%',
  top: '50%',
  transform: 'translateY(-50%)',
});

export default ChatInput;
