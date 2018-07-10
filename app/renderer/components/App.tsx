import * as React from 'react';
import { Provider, observer } from 'mobx-react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { stores } from '../stores';
import { PipelinesList } from './pipelines';

injectGlobal`
  ${reset}

  body {
    font-size: 14px;
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

@observer
export class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <ThemeProvider theme={theme}>
                    <PipelinesList />
                </ThemeProvider>
            </Provider>
        );
    }
}
