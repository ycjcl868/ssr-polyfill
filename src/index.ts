import { JSDOM } from 'jsdom';

const merge = require('lodash.merge');

interface Params {
  url?: string;
  html?: string;
  [key: string]: any;
}

type IParams = Params | (() => Params);

const ssrPolyfill = (params: IParams): object => {
  let ctx = {} as Params;

  if (typeof params === 'object') {
    ctx = merge(params, ctx);
  }

  if (typeof params === 'function') {
    ctx = merge(params(), ctx);
  }

  const { url, html, ...context } = ctx;

  const dom = new JSDOM(html || '<body><div id="root"></div></body>', {
    url: url || 'http://localhost/',
  });
  // { window }
  const mockWindow = merge(dom.window, {
    // https://github.com/akiran/react-slick/issues/742
    matchMedia: query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
    }),
    ...context,
  });

  return mockWindow;
};

export = ssrPolyfill;
