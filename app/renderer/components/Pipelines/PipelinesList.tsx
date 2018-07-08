import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export function PipelinesList() {
    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography color="inherit">Pipelines</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
