import styled from "styled-components";

export const Aside = styled.aside`
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ListItem = styled.li`
    text-align: center;
    border-bottom: 1px solid;
    border-color: ${props => props.$active ? '#47A138' : '#000'};
    color: ${props => props.$active ? '#47A138' : '#000'};
    font-weight: ${props => props.$active ? '700' : '400'};
    padding-bottom: 16px;
`

export const Link = styled.a`
    color: inherit;
    text-decoration: none;
`