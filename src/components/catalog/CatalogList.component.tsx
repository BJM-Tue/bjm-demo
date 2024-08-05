import { ReactNode } from 'react';
import { Col, Row, Space, theme, Typography } from 'antd';
import styled from 'styled-components';

const CATALOG_LIST = {
  ITEM: {
    BORDER_COLOR: '#f0f0f0',
    HOVER_BG_COLOR: '#F5F5F5',
  },
};

export type CatalogItemType = 'pdf' | 'web';

export interface CatalogItemprops {
  title: string;
  description: string;
  icon: ReactNode;
  type: CatalogItemType;
}

interface CatalogListProps {
  items: CatalogItemprops[];
}

const CatalogList = (props: CatalogListProps) => {
  const { items } = props;
  const { token } = theme.useToken();

  return (
    <CatalogListContainer style={{ paddingBlock: token.paddingXS * 2 }}>
      <Row gutter={[token.paddingXS * 2, token.paddingXS * 2]} style={{ width: '85%' }}>
        {items.map((item, index) => {
          const { title, description, icon } = item;
          return (
            <Col key={index} xs={24} md={12}>
              <CatalogItem
                direction="vertical"
                style={{ padding: token.paddingMD, borderRadius: token.borderRadius }}
              >
                <Space style={{ marginBottom: token.marginMD }}>
                  {icon}
                  <Typography.Text
                    style={{
                      display: 'flex',
                      fontSize: token.fontSizeHeading4,
                      fontWeight: 'bold',
                      marginLeft: token.marginMD,
                      paddingBottom: token.padding / 3,
                    }}
                  >
                    {title}
                  </Typography.Text>
                </Space>
                <Typography.Text style={{ fontSize: token.fontSizeLG }}>
                  {description}
                </Typography.Text>
              </CatalogItem>
            </Col>
          );
        })}
      </Row>
    </CatalogListContainer>
  );
};

const CatalogListContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflowY: 'auto',
  height: 400,
});

const CatalogItem = styled(Space)({
  cursor: 'pointer',
  transition: '.3s ease',
  border: `1px solid ${CATALOG_LIST.ITEM.BORDER_COLOR}`,
  '&:hover': {
    backgroundColor: CATALOG_LIST.ITEM.HOVER_BG_COLOR,
  },
});

export default CatalogList;
