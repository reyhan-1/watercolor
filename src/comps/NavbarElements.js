import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-left: 35%;
`

export const NavItem = styled.li`
   height: 0px;
   text-decoration: none;
`

export const NavLinks = styled(LinkS)`  /*react scroll link*/
   margin-top: 0;
   opacity: 0.7;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-weight: bolder;
   -webkit-text-stroke: 0.5px #D4AF37;
   color: white;
   }
   
   &:hover{
      text-decoration: none;
      transition: all 0.2 ease-in-out;
      opacity: 0.7;      
      color: #D4AF37;
   }

   @media screen and (max-width: 480px) {
   padding: 0.4em;
   }
`
