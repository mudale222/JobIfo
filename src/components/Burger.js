import React, { useEffect, useState, useReducer } from 'react'
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
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

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      {/* <a href="/"> */}
      {/* <span role="img" aria-label="about us">💁🏻‍♂️</span> */}
      {/* About us */}
      {/* </a> */}
      {/* <a href="/"> */}
      {/* <span role="img" aria-label="price">💸</span> */}
      {/* Pricing */}
      {/* </a> */}
      {/* <a href="/"> */}
      {/* <span role="img" aria-label="contact">📩</span> */}
      {/* Contact */}
      {/* </a> */}
      <ul>
        <li><a href="">asdfasdfasfd</a></li>
        <li><a href="">asdfasdfsdffvvvvv</a></li>
        <li><a href="">av</a></li>
        <li><a href="">azzzzzzzsdfasdfsdffvvvvv</a></li>
        <li><a href="">asdfasdffvvvvv</a></li>
        <li><a href="">asdfasdffvvvvv</a></li>
        <li><a href="">asdfasdffvvvvv</a></li>
        <li><a href="">asdfasdffvvvvv</a></li>
      </ul>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.20rem;
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