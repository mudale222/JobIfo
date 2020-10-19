import React, { useEffect, useState, useReducer } from 'react'
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: table;
  flex-direction: column;
  justify-content: center;
  background: #202965;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index:5;
  padding-top: 4rem;
  min-width: max-content;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    //padding: 2.25rem 0;
   // font-weight: bold;
  //  letter-spacing: 0.5rem;
    //color: #0D0C1D;
    color:#fff;
    text-decoration: none;
    transition: color 0.3s linear;
    white-space: nowrap;
    padding-right: 2rem;
    padding-bottom: 4rem;


    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
const menuItems = ["חיפוש עבודה", "דרושים הייטק", "דף הבית", "השמת בכירים", "פורום עבודה בהייטק",
  "חברות הייטק", "מידע לחברות", "מידע למועמד", "אודותנו",
  "צור קשר", "About us"]

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        {menuItems.map(el => {
          return (
            <li><i class="fa fa-chevron-left fa-lg"></i><a href="">{el}</a></li>
          )
        })}
      </ul>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 1.60rem;
  right: 1.50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  padding: 2rem;
  background: #212A66;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#FFFFFF' : '#FFFFFF'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      {/* <div>
                <h1>Hello. This is burger menu tutorial</h1>
                <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
                <small>Icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
            </div> */}
      <div ref={node} className="topHeader-burgerWrapper">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}


// ReactDOM.render(<App />, document.getElementById('app'));

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};

export default App