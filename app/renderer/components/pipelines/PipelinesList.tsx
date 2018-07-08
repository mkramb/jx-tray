import * as React from 'react';
import { Page } from '../layout';
import styled from 'styled-components';

const Container = styled.div`
    padding: ${props => props.theme.spacing.base + 'px'};
`;

export function PipelinesList() {
    return (
        <Page title="pipelines">
            <Container>WIP</Container>
        </Page>
    );
}
