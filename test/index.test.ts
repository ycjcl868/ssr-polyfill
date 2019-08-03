const ssrPolyfill = require('../lib/index');


describe('test unit', () => {
  it('nodePolyfill object not BOM object', () => {
    const mockWin = ssrPolyfill({
      url: 'http://localhost/about',
      USER_DEFINED: 'hello',
    });

    // global.window.pathname in jest always return /
    expect(mockWin.location.pathname).toEqual('/about');
    expect(mockWin.location.origin).toEqual('http://localhost')
    expect(mockWin.USER_DEFINED).toEqual('hello');
  });

  it('nodePolyfill object BOM object', () => {
    const mockWin = ssrPolyfill({
      url: 'http://localhost/news',
      context: {
        username: 'ycjcl868',
      },
    });
    expect(mockWin.location.pathname).toEqual('/news');
    expect(mockWin.context.username).toEqual('ycjcl868');
  });


  it('nodePolyfill object function call', () => {
    const mockWin = ssrPolyfill(() => ({
      url: 'http://localhost/news',
      context: {
        username: 'functionCall',
      },
    }));

    expect(mockWin.location.pathname).toEqual('/news');
    expect(mockWin.context.username).toEqual('functionCall');
  });
})
