import styled from 'styled-components';

const Header = styled.h1`
    display: flex;
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.white};
    padding: ${props => props.theme.spacing.base + 'px'};
    font-variant: small-caps;
    font-size: 16px;
`;

export { Header };
