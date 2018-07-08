import * as React from 'react';
import styled from 'styled-components';
import { PipelinesList } from './PipelinesList';

const Title = styled.h1`
    text-align: center;
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.white};
    padding: ${props => props.theme.spacing()};
    font-variant: small-caps;
`;

export function PipelinesContainer() {
    return (
        <div>
            <Title>pipelines</Title>
            <PipelinesList />
        </div>
    );
}
