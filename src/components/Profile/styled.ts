import styled from 'styled-components';

export const Card = styled.div`
  background: #29292E;
  width: 30%;
  border-radius: 10px;
  margin-top: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media(max-width: 600px){
    width: 100%
  }
`

export const Avatar = styled.img`
  width: 40%;
  border-radius: 100%;
  border: 3px solid #7BF1A8;
  margin-top: 70px;
` 

export const Name = styled.h1`
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`

export const City = styled.h2`
  font-size: 15px;
  margin-top: 0px;
  color: #fff;
  font-weight: 200;
`

export const Line = styled.hr`
  border: 1px solid #7BF1A8;
  width: 90%;
  margin: 30px 0px;
`

export const IconsGroup = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media(max-width: 600px){
   width: 55%;
  }
`

export const Icon = styled.img`
  width: 20%;
`
export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height}
`