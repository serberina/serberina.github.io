# blog
FrontEnd + Manage + backEnd + mongodb(umi3 + egg + mongodb)

```
package.json scripts
"analyz": "cross-env ANALYZE=1 umi build"
1. cdn
externals: {
    [`highlight.js`]: 'window.hljs',
    moment: 'window.moment',
    react: 'window.React',
    [`react-dom`]: 'window.ReactDOM',
    marked: 'window.marked',
  },
  scripts: [
    'https://cdn.bootcdn.net/ajax/libs/highlight.js/10.0.3/highlight.min.js',
    'https://cdn.bootcdn.net/ajax/libs/moment.js/2.26.0/moment.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react/16.12.0/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/marked/1.1.0/marked.min.js',
  ]
  2. qiniu cloud cdn
  3. nginx.conf server
        gzip on;
        gzip_buffers 32 4k;
        gzip_comp_level 6;
        gzip_min_length 200;
        gzip_types text/css text/xml application/javascript;
        gzip_vary on;
  ```
