import { Pagination, Space, theme, Typography } from 'antd';
import { WechatWorkOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const CONVERSATION = {
  TITLE_TEXT: '質問履歴',
  LINE: {
    LEFT: -20,
    HEIGHT: 1,
    BG_COLOR: 'hsla(0,0%,100%,.2)',
  },
  ACTIVE_BG_COLOR: 'rgb(18, 47, 51)',
  HOVER_BG_COLOR: '#323232',
  PAGINATION: {
    HEIGHT: 40,
  },
};

const Conversations = () => {
  const { token } = theme.useToken();

  return (
    <>
      <ConversationList style={{ paddingBlock: token.padding }}>
        <Typography.Text
          style={{
            fontSize: token.fontSize,
            marginBottom: token.marginMD,
            paddingTop: token.padding,
            paddingBottom: token.paddingMD / 2,
          }}
        >
          {CONVERSATION.TITLE_TEXT}
        </Typography.Text>
        {[...Array(20)].map((_, index) => {
          return (
            <ConversationItem
              key={index}
              className={index === 0 ? 'active' : ''}
              direction="vertical"
              size={token.marginMD / 2}
              style={{
                marginBottom: token.marginXS,
                padding: token.paddingXS,
                borderRadius: token.borderRadius,
              }}
            >
              <Typography.Paragraph ellipsis style={{ margin: 0 }}>
                <WechatWorkOutlined style={{ marginRight: token.padding / 3 }} /> 1.
                新しい学びの門出を迎える皆さん、入学おめでとうございます！未来を切り拓く力を身につけ、地域社会の発展に貢献するリーダーとなることを期待しています。共に成長し、明るい未来を築きましょう。
              </Typography.Paragraph>
              <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                2024/08/02 13:17
              </Typography.Text>
            </ConversationItem>
          );
        })}
      </ConversationList>
      <PaginationContainer size="small" align="start" total={10} pageSize={1} />
    </>
  );
};

const ConversationList = styled('div')({
  height: `calc(100% - ${CONVERSATION.PAGINATION.HEIGHT}px)`,
  overflowY: 'auto',
  '& > *:first-child': {
    display: 'block',
    position: 'relative',
  },
  '& > *:first-child::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: CONVERSATION.LINE.LEFT,
    height: CONVERSATION.LINE.HEIGHT,
    backgroundColor: CONVERSATION.LINE.BG_COLOR,
  },
});

const ConversationItem = styled(Space)({
  cursor: 'pointer',
  '&.active': {
    backgroundColor: CONVERSATION.ACTIVE_BG_COLOR,
  },
  '&:hover:not(.active)': {
    backgroundColor: CONVERSATION.HOVER_BG_COLOR,
  },
});

const PaginationContainer = styled(Pagination)({
  height: CONVERSATION.PAGINATION.HEIGHT,
  alignItems: 'center',
  '& .ant-pagination-item:hover:not(.ant-pagination-item-active)': {
    textDecoration: 'underline',
  },
  '& .ant-pagination-item-active': {
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
  },
});

export default Conversations;
