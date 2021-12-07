import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";





export default function Navbar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const Naver = styled.div`
  width: 100%;
  height: 10%;
  padding: 0;
  margin: 0;

  display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;

  
  `
  const Linkers = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  margin-right: 20px;
  display: flex;
justify-content: flex-end !important;


  `
  const Linkk = styled.li`
  font-size: 24px;
    padding: 10px;
    margin: 0;
    display: flex;
   align-items: center;
   justify-content: center;


    `
  return (
    <Naver>
      <Linkers>

        <Linkk className={splitLocation[1] === "work" ? "active" : ""}>
          <Link activeClassName="active" to="/work">Work</Link>
        </Linkk>
        <Linkk className={splitLocation[1] === "contact" ? "active" : ""}>
          <Link activeClassName="active" to="/contact">Contact</Link>
        </Linkk>
      </Linkers>
    </Naver>
  )
}
