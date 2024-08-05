import { Tabs, TabsProps } from 'antd';
import styled from 'styled-components';
import { PDFSvg } from '../svgs';
import CatalogList, { CatalogItemprops } from './CatalogList.component';

const CATALOG = {
  TAB_BAR_ITEM: {
    FONT_SIZE: 18,
    FONT_WEIGHT: 500,
    PADDING_OUTER: '12px 16px',
    PADDING_INNER: '5px 15px',
    BORDER_RADIUS: 15,
    HOVER_BG_COLOR: '#2453dd',
    HOVER_COLOR: '#fff',
  },
};

const catalogItems: CatalogItemprops[] = [
  {
    title: '資料の要約',
    description:
      '要約したいPDF資料や、WebサイトのURLを登録することで、内容をわかりやすくまとめます。',
    icon: <PDFSvg />,
    type: 'pdf',
  },
  {
    title: '資料の要約',
    description:
      '要約したいPDF資料や、WebサイトのURLを登録することで、内容をわかりやすくまとめます。',
    icon: <PDFSvg />,
    type: 'web',
  },
  {
    title: '資料の要約',
    description:
      '要約したいPDF資料や、WebサイトのURLを登録することで、内容をわかりやすくまとめます。',
    icon: <PDFSvg />,
    type: 'pdf',
  },
  {
    title: '資料の要約',
    description:
      '要約したいPDF資料や、WebサイトのURLを登録することで、内容をわかりやすくまとめます。',
    icon: <PDFSvg />,
    type: 'web',
  },
  {
    title: '資料の要約',
    description:
      '要約したいPDF資料や、WebサイトのURLを登録することで、内容をわかりやすくまとめます。',
    icon: <PDFSvg />,
    type: 'pdf',
  },
];

const items: TabsProps['items'] = [
  {
    key: 'all',
    label: '全て',
    children: <CatalogList items={catalogItems} />,
  },
  {
    key: 'parliamentary-preparation',
    label: '議会準備',
    children: (
      <CatalogList items={catalogItems.filter((catalog) => catalog && catalog.type === 'pdf')} />
    ),
  },
  {
    key: 'writing',
    label: '文章作成',
    children: (
      <CatalogList items={catalogItems.filter((catalog) => catalog && catalog.type === 'web')} />
    ),
  },
];

const Catalog = () => {
  return <TabsContainer defaultActiveKey="1" items={items} />;
};

const TabsContainer = styled(Tabs)({
  '& .ant-tabs-tab': {
    fontSize: CATALOG.TAB_BAR_ITEM.FONT_SIZE,
    fontWeight: CATALOG.TAB_BAR_ITEM.FONT_WEIGHT,
    padding: CATALOG.TAB_BAR_ITEM.PADDING_OUTER,
    '& .ant-tabs-tab-btn': {
      padding: CATALOG.TAB_BAR_ITEM.PADDING_INNER,
      borderRadius: CATALOG.TAB_BAR_ITEM.BORDER_RADIUS,
      '&:hover': {
        backgroundColor: CATALOG.TAB_BAR_ITEM.HOVER_BG_COLOR,
        color: CATALOG.TAB_BAR_ITEM.HOVER_COLOR,
      },
    },
  },
});

export default Catalog;
