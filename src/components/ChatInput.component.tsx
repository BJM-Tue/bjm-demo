import { Button, Input, Space, theme } from 'antd';
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons';

const ChatInput = () => {
  const { token } = theme.useToken();

  return (
    <Space size={token.marginXS * 2}>
      <Input size="large" prefix={<PaperClipOutlined />} />
      <Button type="primary" icon={<SendOutlined />}>
        送信
      </Button>
    </Space>
  );
};

export default ChatInput;
