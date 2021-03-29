import styled from "styled-components";

export const Card = styled.div`
  background: #29292E;
  width: 65%;
  border-radius: 10px;
  margin-top: 25%;
  
  @media(max-width: 600px){
    width: 100%;
    margin-top: 5%;
  }

`

export const Title = styled.h1`
  font-size: 20px;
  color: #fff;
`

export const Paragraph = styled.p`
  color: #fff;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 300;
`

export const Content = styled.div`
  padding: 30px;
`

export const ButtonGroup = styled.div`
  display: flex;
`

export const ButtonSocial = styled.a`
  font-size: 15px;
  background: #202024;
  border: 1px solid #202024;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;

  &:hover{
    transition: all 1s;
    border: 1px solid #7BF1A8;
  }
`

export const Image = styled.img`
  width: ${(props) => props.width};
  margin-right: 10px;
`