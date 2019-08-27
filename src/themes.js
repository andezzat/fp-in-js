import { future as _future } from '@mdx-deck/themes'

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  marginY: 0,
}

export const base = {
  breakpoints: ['40em', '52em', '64em'],
  space: {
    sm: 16,
    md: 24,
    lg: 42,
    xl: 54,
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [16, 24, 28, 36, 40, 48, 56, 64, 72, 84],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 6,
      marginY: 'xl',
    },
    h2: {
      ...heading,
      fontSize: 5,
      marginY: 'lg',
    },
    h3: {
      ...heading,
      fontSize: 4,
      marginY: 'lg',
    },
    h4: {
      ...heading,
      fontSize: 3,
      marginBottom: 'sm'
    },
    h5: {
      ...heading,
      fontSize: 2,
      marginBottom: 'sm'
    },
    h6: {
      ...heading,
      fontSize: 1,
      marginBottom: 'sm'
    },
    p: {
      fontWeight: 'body',
      fontSize: 0,
      marginBottom: 1,
    },
    li: {
      fontSize: 3
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}

export const future = {
  ...base,
  ..._future,
  styles: {
    code: {
      ...base.styles.code,
      ..._future.styles.code
    }
  }
}
