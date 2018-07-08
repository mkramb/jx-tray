import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    background-color: ${props => props.theme.color.blue};
    color: ${props => props.theme.color.white};
    padding: ${props => props.theme.spacing.base + 'px'};
    font-variant: small-caps;
`;

export { Header };
