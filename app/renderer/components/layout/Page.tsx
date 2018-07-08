import * as React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';

const PageContent = styled.div`
    flex: 1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

interface PageProps {
    title: string;
    className?: string;
    children?: JSX.Element;
}

function Page({ className, title, children }: PageProps) {
    return (
        <Container>
            <Header>{title}</Header>
            <PageContent>{children}</PageContent>
            <Footer />
        </Container>
    );
}

export { Page, PageProps };
