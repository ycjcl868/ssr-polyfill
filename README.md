<h1 align="center">ssr-polyfill 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ycjcl868/ssr-polyfill#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ycjcl868/ssr-polyfill/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ycjcl868/ssr-polyfill/blob/master/LICENSE">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" target="_blank" />
  </a>
</p>

> fake browser runtime environment in server-side render.

### 🏠 [Homepage](https://github.com/ycjcl868/ssr-polyfill#readme)

## Install

```sh
npm install ssr-polyfill --save
# or yarn add ssr-polyfill
```

## Usage
in node env:

```js
const ssrPolyfill = require('ssr-polyfill');
global.window = ssrPolyfill({
  context: {
    userInfo: 'hello',
  }
});
global.self = global.window;
// maybe you can mock somewhere
// not use `window.document` use `document.*`
global.document = global.window.document;
// in client env `window.context` is { userInfo: 'hello' }
```
`

- `url` default is `http://localhost`, you also change the `location.pathname` use `http://localhost/bar`
- `html` init html template, default is `<body><div id="root"></div></body>`
- other params will mount in `window` object

## Run tests

```sh
npm run test
```

## Author

* Github: [@ycjcl868](https://github.com/ycjcl868)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ycjcl868/ssr-polyfill/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [ISC](https://github.com/ycjcl868/ssr-polyfill/blob/master/LICENSE) licensed.
