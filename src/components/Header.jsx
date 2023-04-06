import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from '../features/car/carSlice'
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);


  return (
    <Container>
      <a href="">
        <img src="./images/logo.png" alt="" />
      </a>
      <Menu>

        {cars && cars.map((car, index) => (
        <a key={index} href="#">{car}</a>
        
        ))}

      </Menu>
      <RightMenu>
        <a href="">Account</a>
       <CustomMenu  onClick={() => setBurgerStatus(true)}><a href="#">Menu</a></CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
              <Closed onClick={() => setBurgerStatus(false)} src="./images/close.svg"></Closed>
        </CloseWrapper>

        {cars && cars.map((car, index) => (
        <li key={index}><a href="">{car}</a></li>
        
        ))}

        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href="">Demo Drive</a></li>
        <li><a href="">Insurance</a></li>
        <li><a href="">Cybertruck</a></li>
        <li><a href="">Roadster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">Charging</a></li>
        <li><a href="">Commercial Energy</a></li>
        <li><a href="">Utilities</a></li>
        <li><a href="">Find Us</a></li>
        <li><a href="">Support</a></li>
        <li><a href="">Investor Relations</a></li>

      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 60px;
  width: 100%;
  justify-content: space-between;
  z-index: 100;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 30px;

  a {
    font-weight: bold;
    margin-bottom: 4px;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: black;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: black;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  padding: 20px 30px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    cursor: pointer;
    transition: transform 400ms;

  li {
    padding: 16px 0;
  }

  a {
    font-weight: 600;
    color: black;
    transition: 100ms all ease-in;
  }

  a:hover {
    padding: 8px;
  }
`;

const Closed = styled.img`
  width: 20px;
`;

const CustomMenu = styled.div `

`;

const CloseWrapper = styled.div `
  display: flex;
  justify-content: flex-end;


`