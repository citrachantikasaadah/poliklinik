import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
// import { Link as LinkS } from "react-scroll"
 

export const Nav = styled.nav`
    background: #2CB9CC;
    height: 88px;
    // margin-top: --80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: stiky;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
`