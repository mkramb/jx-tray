import * as React from 'react';
import { PipelinesContainer } from './Pipelines';
import { injectGlobal, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset}

  body {
    background-color: white;
    font-family: 'Roboto', sans-serif;
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
