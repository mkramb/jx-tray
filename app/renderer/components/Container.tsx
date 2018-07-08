import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { PipelinesList } from './Pipelines';

const theme = createMuiTheme();

export function Container() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <PipelinesList />
        </MuiThemeProvider>
    );
}
