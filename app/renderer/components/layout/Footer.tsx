import * as React from 'react';
import styled from 'styled-components';
import { ipcRenderer } from 'electron';
import { Menu } from 'styled-icons/material/Menu';
import { MENU_OPEN } from '../../../main/action';

const MenuIcon = Menu.extend`
    fill: ${props => props.theme.color.grey};
    height: 24px;
    width: 24px;
`;

const Container = styled.div`
    padding: ${props => props.theme.spacing.min + 'px'};
    padding-right: ${props => props.theme.spacing.base + 'px'};
    border-top: ${props => '1px solid' + props.theme.color.lightGrey};
    background-color: ${props => props.theme.color.white};
    flex-direction: row-reverse;
    align-items: center;
    display: flex;
`;

interface FooterProps {
    className?: string;
}

class Footer extends React.Component<FooterProps> {
    onMenuShow = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();

        ipcRenderer.send(MENU_OPEN, {
            height: rect.height,
            width: rect.width,
            x: rect.left,
            y: rect.bottom
        });
    };

    render() {
        return (
            <Container>
                <a href="#" onClick={this.onMenuShow}>
                    <MenuIcon />
                </a>
            </Container>
        );
    }
}

export { Footer };
