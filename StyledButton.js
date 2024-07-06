import styled from 'styled-components';

const Button = styled.button`
  background: rgb(0,172,238);
  background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before,
  &::after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2,126,251,1);
    transition: all 0.3s ease;
  }

  &::before {
    height: 0%;
    width: 2px;
  }

  &::after {
    width: 0%;
    height: 2px;
  }

  &:hover {
    background: transparent;
    box-shadow: none;
  }

  &:hover::before {
    height: 100%;
  }

  &:hover::after {
    width: 100%;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    &:hover {
      color: rgba(2,126,251,1);
    }

    &::before,
    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      background: rgba(2,126,251,1);
      transition: all 0.3s ease;
    }

    &::before {
      width: 2px;
      height: 0%;
    }

    &::after {
      width: 0%;
      height: 2px;
    }

    &:hover::before {
      height: 100%;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default Button;
