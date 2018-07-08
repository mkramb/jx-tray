import * as React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
    padding: ${props => props.theme.spacing()};
`;

export function PipelinesList() {
    return (
        <Container>
            <li>Listing ...</li>
        </Container>
    );
}
