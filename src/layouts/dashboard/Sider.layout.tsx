import { useState } from 'react';
import { Button, Layout, SiderProps, Space, theme, Typography } from 'antd';
import { DoubleLeftOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Conversations from './Conversations';
import User from './User';

const SIDER = {
  WIDTH: 280,
  HEIGHT: '100vh',
  HEADER: {
    HEIGHT: 90,
  },
  ADD_CHATBOX_BUTTON: {
    TEXT: '新しくAIに依頼する',
    HEIGHT: 40,
    HOVER_BG_COLOR: '#f0f0f0',
  },
  USER: {
    HEIGHT: 40,
  },
  COLLAPSE_ICON: {
    GAP: 8,
    SIZE: 40,
  },
};

const Sider = (props: SiderProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();

  return (
    <SiderContainer
      width={SIDER.WIDTH}
      collapsed={collapsed}
      collapsible
      trigger={null}
      collapsedWidth={0}
      style={{
        paddingInline: collapsed ? 0 : token.padding,
      }}
      {...props}
    >
      <Header style={{ paddingInline: token.paddingXS }}>
        <Typography.Title level={2}>画像</Typography.Title>
      </Header>
      <NewChatboxButton
        type="text"
        style={{
          borderRadius: token.borderRadius * 2,
          fontSize: token.fontSizeHeading5,
          backgroundColor: token.colorBgContainer,
        }}
      >
        <PlusOutlined /> {SIDER.ADD_CHATBOX_BUTTON.TEXT}
      </NewChatboxButton>
      <ConversationContainer>
        <Conversations />
      </ConversationContainer>
      <UserContainer>
        <User />
      </UserContainer>
      <CollapseIcon
        onClick={() => setCollapsed(!collapsed)}
        style={{
          borderRadius: token.borderRadius,
          right: collapsed
            ? (SIDER.COLLAPSE_ICON.GAP + SIDER.COLLAPSE_ICON.SIZE) * -1
            : SIDER.COLLAPSE_ICON.GAP,
        }}
      >
        <Typography.Text>
          <DoubleLeftOutlined
            style={{ transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </Typography.Text>
      </CollapseIcon>
    </SiderContainer>
  );
};

const SiderContainer = styled(Layout.Sider)({
  position: 'relative',
  height: SIDER.HEIGHT,
  '& .ant-typography': {
    color: 'var(--ant-layout-trigger-color)',
  },
  '& .ant-pagination .ant-pagination-disabled button': {
    color: 'gray !important',
  },
  '& .ant-pagination': {
    '& li, button, a, a span': {
      color: 'var(--ant-layout-trigger-color) !important',
    },
  },
});

const Header = styled(Space)({
  height: SIDER.HEADER.HEIGHT,
});

const NewChatboxButton = styled(Button)({
  width: '100%',
  height: SIDER.ADD_CHATBOX_BUTTON.HEIGHT,
  '&:hover': {
    backgroundColor: `${SIDER.ADD_CHATBOX_BUTTON.HOVER_BG_COLOR} !important`,
  },
});

const ConversationContainer = styled('div')({
  height: `calc(100% - ${
    SIDER.HEADER.HEIGHT + SIDER.ADD_CHATBOX_BUTTON.HEIGHT + SIDER.USER.HEIGHT
  }px)`,
  '& > div': {
    width: '100%',
  },
});

const UserContainer = styled('div')({
  height: SIDER.USER.HEIGHT,
  '& > div': {
    width: '100%',
    height: '100%',
  },
  '& .ant-typography-ellipsis': {
    margin: 0,
    width: SIDER.WIDTH / 1.5,
  },
});

const CollapseIcon = styled(Button)({
  position: 'absolute',
  top: SIDER.COLLAPSE_ICON.GAP,
  width: SIDER.COLLAPSE_ICON.SIZE,
  height: SIDER.COLLAPSE_ICON.SIZE,
  border: 'none',
  transition: 'all .2s ease',
  backgroundColor: 'var(--ant-layout-sider-bg) !important',
  zIndex: 2,
});

export default Sider;
