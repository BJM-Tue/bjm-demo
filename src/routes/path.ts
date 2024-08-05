const genUrl = (...path: string[]) => path.join('/');

export const ROOT_DASHBOARD = '';
export const ROOT_AUTH = '/auth';

export const CHAT_PATH = 'chat';
export const LOGIN_PATH = 'login';

const PATH_DASHBOARD = {
  chat: genUrl(ROOT_DASHBOARD, CHAT_PATH),
};

const PATH_AUTH = {
  login: genUrl(ROOT_AUTH, LOGIN_PATH),
};

export { PATH_DASHBOARD, PATH_AUTH };
