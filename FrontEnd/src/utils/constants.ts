/**
 * @description Constant collection
 * @author serberina
 * @date 2020/06/01
 */

/**
 * @description proxy url
 * @dev http://127.0.0.1:7001
 * @prod http://59.110.43.170:7001
 */
export const PROXY: string = 'http://127.0.0.1:7001';

/**
 * @description footer images
 */
export const FOOTERIMGS: string[] = [
  '../public/images/01.jpg',
  '../public/images/01.jpg',
  '../public/images/01.jpg',
  '../public/images/01.jpg',
];

/**
 * @description Instagram
 */
export const INSTAGRAM: string[] = [
  '../public/images/02.jpg',
  '../public/images/02.jpg',
  '../public/images/02.jpg',
  '../public/images/02.jpg',
  '../public/images/02.jpg',
  '../public/images/02.jpg',
  '../public/images/02.jpg',
  '../public/images/02.jpg',
  '../public/images/02.jpg',
];

/**
 * @description login url
 * @dev http://localhost:8000
 * @prod http://serberina.cn
 */
export const LOGINLOCALPROD: string = 'http://localhost:8001';

/**
 * @description github oauth url
 * @dev `https://github.com/login/oauth/authorize?client_id=d094df5206d99f67e373&redirect_uri=http://localhost:8000/`
 * @prod `https://github.com/login/oauth/authorize?client_id=d094df5206d99f67e373&redirect_uri=http:///`
 * @client_id d094df5206d99f67e373
 */
export const GITHUBOAUTH: string = `https://github.com/login/oauth/authorize?client_id=d094df5206d99f67e373&redirect_uri=http://localhost:8001/`;

interface AboutBlogType {
  date: string;
  content: string;
}
export const AboutBlog: AboutBlogType[] = [
  { date: '📅2020/05/31', content: '1.0版本' },
  { date: '📅2020/06/04', content: '博客,后台页面首屏优化' },
  { date: '📅2020/06/05', content: '重构了博客UI' },
  { date: '📅2020/06/06', content: 'Oauth前后端数据库联调完毕, 已支持github第三方登录' },
  { date: '📅2020/06/09', content: '响应式小屏不显示sidebar, 新增按钮抽屉弹出sidebar, 新增文章阅读量展示' },
];
