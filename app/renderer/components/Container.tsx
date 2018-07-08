import * as React from 'react';
import { PipelinesContainer } from './Pipelines';
import { injectGlobal, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset}

  body {
    font-family: 'Roboto', sans-serif;
    background-color: white;
    user-select: none;
  }
`;

const theme = {
    color: {
        blue: '#1d7dcf',
        white: '#ffffff'
    },
    spacing(multiply: number = 1) {
        return 8 * multiply + 'px';
    }
};

export function Container() {
    return (
        <ThemeProvider theme={theme}>
            <PipelinesContainer />
        </ThemeProvider>
    );
}
