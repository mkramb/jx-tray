import * as React from 'react';
import { PipelinesList } from './pipelines';
import { injectGlobal, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset}

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    user-select: none;
  }
`;

const theme = {
    color: {
        blue: '#1d7dcf',
        white: '#ffffff',
        grey: '#b1b1b1',
        lightGrey: '#eeeeee'
    },
    spacing: {
        min: 4,
        base: 8
    }
};

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <PipelinesList />
        </ThemeProvider>
    );
}
