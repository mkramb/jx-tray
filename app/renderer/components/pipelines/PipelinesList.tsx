import * as React from 'react';
import { ipcRenderer } from 'electron';
import styled from 'styled-components';
import { PIPELINE_SUBSCRIBE } from '../../../main/actions';
import { KubeCallbackKind } from '../../../main/kubernetes';
import { Page } from '../layout';

const Container = styled.div`
    padding: ${props => props.theme.spacing.base + 'px'};
`;

export class PipelinesList extends React.Component {
    componentDidMount() {
        ipcRenderer.send(PIPELINE_SUBSCRIBE);
        ipcRenderer.on(KubeCallbackKind.ADDED, (event: any, data: any) => {
            console.log('added', data);
        });
    }

    render() {
        return (
            <Page title="pipelines">
                <Container>WIP</Container>
            </Page>
        );
    }
}
