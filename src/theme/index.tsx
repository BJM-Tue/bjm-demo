import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ConfigProvider theme={{ token: { borderRadius: 4, padding: 15 } }}>{children}</ConfigProvider>
  );
};

export default ThemeProvider;
