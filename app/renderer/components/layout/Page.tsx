import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    flex-basis: 100px;
    flex-grow: 1;
`;

interface PageProps {
    title: string;
    className?: string;
    children?: JSX.Element | JSX.Element[];
}

function Page({ className, title, children }: PageProps) {
    return (
        <Container>
            <Header>{title}</Header>
            <Content>{children}</Content>
            <Footer />
        </Container>
    );
}

export { Page, PageProps };
