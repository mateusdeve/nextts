import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 150px;
  @media(max-width: 600px){
  padding: 0px 40px;
  }
  @media(min-width: 1800px) {
    margin: 0% 0% 8% 0%;
    /* padding: 0px 300px; */
  }
`

export const Image = styled.img`
  width: ${(props) => props.width};
  margin-right: 10px;
  margin-bottom: 10px;
`


export const Title = styled.h1`
  font-size: 20px;
  color: #fff;
`
export const Group = styled.div`
  padding: 5px 25px;
`