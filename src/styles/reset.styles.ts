const styles = {
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '*, *::before, *::after': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        scrollBehavior: 'auto !important',
        transitionDuration: '0.01ms !important',
      },

      'html:focus-within': {
        scrollBehavior: 'auto',
      },
    },
    'a:not([class])': {
      textDecorationSkipInk: 'auto',
    },
    body: {
      lineHeight: '1em',
      minHeight: '100vh',
      textRendering: 'optimizeSpeed',
    },
    'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
      margin: 0,
    },
    'html:focus-within': {
      scrollBehavior: 'smooth',
    },
    'img, picture': {
      display: 'block',
      maxWidth: '100%',
    },
    'input, button, textarea, select': {
      font: 'inherit',
    },
    'ul[role="list"], ol[role="list"]': {
      listStyle: 'none',
    },
  },
};

export default styles;
